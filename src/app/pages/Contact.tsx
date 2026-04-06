import { useState, useRef } from "react";
import { Mail, Github, Phone, Send, AlertCircle, ShieldCheck } from "lucide-react";

// --- Security Constants ---
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT_MS = 60_000; // 60-second cooldown after submission

/**
 * Sanitize user input by trimming whitespace and stripping
 * potentially dangerous HTML/script patterns.
 * OWASP: Defense-in-depth — sanitize even though Web3Forms
 * also sanitizes on their end.
 */
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "") // Strip <script> tags
    .replace(/<[^>]*>/g, "")                              // Strip all HTML tags
    .replace(/javascript:/gi, "")                         // Strip javascript: URIs
    .replace(/on\w+\s*=/gi, "");                          // Strip inline event handlers
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- Rate Limiting State ---
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const cooldownTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // --- Honeypot State (hidden field that bots fill in) ---
  const [honeypot, setHoneypot] = useState("");

  // Email validation regex (OWASP recommended pattern)
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /**
   * Start a 60-second cooldown timer after a successful submission.
   * Prevents rapid re-submissions (client-side rate limiting).
   */
  const startCooldown = () => {
    setCooldownRemaining(60);
    if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current);
    cooldownTimerRef.current = setInterval(() => {
      setCooldownRemaining((prev) => {
        if (prev <= 1) {
          if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- Honeypot Check: silently reject bot submissions ---
    if (honeypot) {
      // Fake success to not alert the bot
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
      return;
    }

    // --- Rate Limit Check ---
    if (cooldownRemaining > 0) {
      return; // Button is disabled, but extra safety
    }

    // --- Schema-Based Validation ---
    const newErrors: { name?: string; email?: string; message?: string } = {};

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Name validation
    if (!trimmedName) {
      newErrors.name = "Required";
    } else if (trimmedName.length > MAX_NAME_LENGTH) {
      newErrors.name = `Max ${MAX_NAME_LENGTH} characters`;
    }

    // Email validation
    if (!trimmedEmail) {
      newErrors.email = "Required";
    } else if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
      newErrors.email = `Max ${MAX_EMAIL_LENGTH} characters`;
    } else if (!validateEmail(trimmedEmail)) {
      newErrors.email = "Enter a valid email";
    }

    // Message validation
    if (!trimmedMessage) {
      newErrors.message = "Required";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "At least 10 characters";
    } else if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Max ${MAX_MESSAGE_LENGTH} characters`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!ACCESS_KEY || ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        console.error("Web3Forms Access Key is missing or invalid. Check your .env file.");
        alert("The contact form is not configured correctly. Please check the access key.");
        setIsSubmitting(false);
        return;
      }

      // Sanitize all inputs before sending (OWASP defense-in-depth)
      const safeName = sanitizeInput(trimmedName);
      const safeEmail = sanitizeInput(trimmedEmail);
      const safeMessage = sanitizeInput(trimmedMessage);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: safeName,
          email: safeEmail,
          message: safeMessage,
          subject: `New Inquiry from ${safeName}`,
          from_name: "Portfolio Contact Form",
          // Web3Forms built-in honeypot (secondary layer)
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        startCooldown(); // Start 60s rate limit cooldown
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        console.error("Submission failed:", result);
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Enforce max length on input (reject unexpected long data)
    const maxLengths: Record<string, number> = {
      name: MAX_NAME_LENGTH,
      email: MAX_EMAIL_LENGTH,
      message: MAX_MESSAGE_LENGTH,
    };
    if (maxLengths[name] && value.length > maxLengths[name]) return;

    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const inputBase = "w-full rounded-md bg-[#F5EFE6] px-4 py-3.5 text-[#6F4E37] placeholder-[#6F4E37]/50 focus:outline-none transition-colors";
  const inputNormal = `${inputBase} border border-[#6F4E37] focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B]`;
  const inputError = `${inputBase} border-2 border-[#d32f2f] focus:border-[#d32f2f] focus:ring-1 focus:ring-[#d32f2f]`;

  const isFormDisabled = isSubmitting || cooldownRemaining > 0;

  return (
    <div className="py-24 bg-[#F5EFE6] text-[#6F4E37] h-full flex flex-col justify-center animate-in">
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Inquiry &amp; Collaboration
          </h1>
          <p className="mx-auto max-w-2xl text-lg opacity-85">
            Ready to build something real? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Contact Form */}
          <div className="order-1 md:order-1">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>

              {/* Honeypot field — invisible to humans, caught by bots (OWASP anti-automation) */}
              <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                <label htmlFor="bot_check">Do not fill this</label>
                <input
                  id="bot_check"
                  name="bot_check"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={MAX_NAME_LENGTH}
                  className={errors.name ? inputError : inputNormal}
                  disabled={isFormDisabled}
                />
                {errors.name && (
                  <p className="flex items-center gap-1.5 text-[#d32f2f] text-xs font-medium mt-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={MAX_EMAIL_LENGTH}
                  className={errors.email ? inputError : inputNormal}
                  disabled={isFormDisabled}
                />
                {errors.email && (
                  <p className="flex items-center gap-1.5 text-[#d32f2f] text-xs font-medium mt-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest">
                    Inquiry Details
                  </label>
                  {/* Character counter for message field */}
                  <span className={`text-xs font-medium ${
                    formData.message.length > MAX_MESSAGE_LENGTH * 0.9
                      ? "text-[#d32f2f]"
                      : "text-[#6F4E37]/50"
                  }`}>
                    {formData.message.length}/{MAX_MESSAGE_LENGTH}
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Specify target architecture or project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className={`${errors.message ? inputError : inputNormal} resize-y`}
                  disabled={isFormDisabled}
                />
                {errors.message && (
                  <p className="flex items-center gap-1.5 text-[#d32f2f] text-xs font-medium mt-1">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button 
                type="submit" 
                disabled={isFormDisabled}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-[#6F4E37] text-[#F5EFE6] px-8 py-4 text-base font-bold transition-all duration-300 hover:bg-[#8B5A2B] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
                {isSubmitting
                  ? "Sending..."
                  : cooldownRemaining > 0
                    ? `Please wait ${cooldownRemaining}s`
                    : "Send Inquiry"}
              </button>

              {submitSuccess && (
                <div className="p-4 bg-[#8B5A2B]/10 text-[#6F4E37] border border-[#6F4E37]/20 rounded-md text-sm font-bold animate-in fade-in slide-in-from-bottom-2 flex items-center gap-2">
                  <ShieldCheck size={16} />
                  Message sent successfully! I'll be in touch soon.
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="order-2 md:order-2">
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#6F4E37]/30 bg-[#6F4E37]/5 text-[#6F4E37]">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">Email</h3>
                  <a
                    href="mailto:fancymegir01@gmail.com"
                    className="font-medium hover:text-[#8B5A2B] transition-colors"
                  >
                    fancymegir01@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#6F4E37]/30 bg-[#6F4E37]/5 text-[#6F4E37]">
                  <Github size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">GitHub</h3>
                  <a
                    href="https://github.com/Fancy-nateku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-[#8B5A2B] transition-colors"
                  >
                    github.com/Fancy-nateku
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#6F4E37]/30 bg-[#6F4E37]/5 text-[#6F4E37]">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">WhatsApp / Phone</h3>
                  <a
                    href="https://wa.me/254726379173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-[#8B5A2B] transition-colors"
                  >
                    0726379173
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}