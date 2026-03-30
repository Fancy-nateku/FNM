import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
            I'm always interested in new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "#9ca3af" }}>
              Whether you have a question, want to discuss a project, or just want to connect, I'd love to hear from you. Feel free to reach out through any of the following channels.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: "#1a2a4a" }}>
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:fancy.megiri@example.com"
                    className="transition-colors hover:text-blue-400"
                    style={{ color: "#9ca3af" }}
                  >
                    fancy.megiri@example.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: "#1a2a4a" }}>
                  <Github className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">GitHub</h3>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-blue-400"
                    style={{ color: "#9ca3af" }}
                  >
                    github.com/fancymegiri
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: "#1a2a4a" }}>
                  <Linkedin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-blue-400"
                    style={{ color: "#9ca3af" }}
                  >
                    linkedin.com/in/fancymegiri
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: "#1a2a4a" }}>
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p style={{ color: "#9ca3af" }}>Kenya</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div
              className="mt-8 p-6 rounded-lg"
              style={{ backgroundColor: "#1a2a4a", border: "1px solid #2a4a7a" }}
            >
              <h3 className="font-semibold text-white mb-2">Availability</h3>
              <p style={{ color: "#9ca3af" }}>
                Currently open to internship opportunities and freelance projects. Available for full-time positions upon graduation.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  style={{ backgroundColor: "#1e2235", borderColor: "#2a3050", color: "#ffffff" }}
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  style={{ backgroundColor: "#1e2235", borderColor: "#2a3050", color: "#ffffff" }}
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2"
                  style={{ backgroundColor: "#1e2235", borderColor: "#2a3050", color: "#ffffff" }}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </Button>
            </form>

            <p className="text-sm mt-4 text-center" style={{ color: "#6b7280" }}>
              I typically respond within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}