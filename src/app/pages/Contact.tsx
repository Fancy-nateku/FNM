import { useState } from "react";
import { Mail, Github, Phone, Send, AlertCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Required";

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
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Inquiry from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
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
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const inputBase = "w-full rounded-md bg-[#F5EFE6] px-4 py-3.5 text-[#6F4E37] placeholder-[#6F4E37]/50 focus:outline-none transition-colors";
  const inputNormal = `${inputBase} border border-[#6F4E37] focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B]`;
  const inputError = `${inputBase} border-2 border-[#d32f2f] focus:border-[#d32f2f] focus:ring-1 focus:ring-[#d32f2f]`;

  return (
    <div className="py-24 bg-[#F5EFE6] text-[#6F4E37] h-full flex flex-col justify-center animate-in">
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Inquiry & Collaboration
          </h1>
          <p className="mx-auto max-w-2xl text-lg opacity-85">
            Ready to build something real? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Contact Form — no heading */}
          <div className="order-1 md:order-1">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                  className={errors.name ? inputError : inputNormal}
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
                  className={errors.email ? inputError : inputNormal}
                />
                {errors.email && (
                  <p className="flex items-center gap-1.5 text-[#d32f2f] text-xs font-medium mt-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest">
                  Inquiry Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Specify target architecture or project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${errors.message ? inputError : inputNormal} resize-y`}
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
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-[#6F4E37] text-[#F5EFE6] px-8 py-4 text-base font-bold transition-all duration-300 hover:bg-[#8B5A2B] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>

              {submitSuccess && (
                <div className="p-4 bg-[#8B5A2B]/10 text-[#6F4E37] border border-[#6F4E37]/20 rounded-md text-sm font-bold animate-in fade-in slide-in-from-bottom-2">
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