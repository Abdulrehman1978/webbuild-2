"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    service: "GST Services",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const services = [
    "GST Services",
    "Income Tax Services",
    "Accounting & Bookkeeping",
    "Startup Advisory",
    "Export Business Consulting",
    "Finance & Loan Assistance",
    "Other Consultancy",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setSuccess(res.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          service: "GST Services",
          message: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-dark/40 border border-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-active/5 rounded-full filter blur-2xl -z-10" />
      
      <h3 className="font-display-brand text-lg font-bold text-ice-white mb-6">
        Connect with an Advisor
      </h3>

      {success && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-active/10 border border-emerald-active/20 text-emerald-active flex gap-3 items-start text-xs md:text-sm animate-fade-in">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex gap-3 items-start text-xs md:text-sm animate-fade-in">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-[10px] uppercase font-bold text-silver tracking-widest">
              Full Name <span className="text-champagne">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Dharmendra Kohli"
              required
              className="bg-obsidian border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-ice-white focus:outline-none focus:border-emerald-active transition-colors duration-300 placeholder:text-silver/20"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[10px] uppercase font-bold text-silver tracking-widest">
              Email Address <span className="text-champagne">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. kohlisanjay@gmail.com"
              required
              className="bg-obsidian border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-ice-white focus:outline-none focus:border-emerald-active transition-colors duration-300 placeholder:text-silver/20"
            />
          </div>
        </div>

        {/* Phone & Business Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-[10px] uppercase font-bold text-silver tracking-widest">
              Phone Number <span className="text-champagne">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 9324264948"
              required
              className="bg-obsidian border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-ice-white focus:outline-none focus:border-emerald-active transition-colors duration-300 placeholder:text-silver/20"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="businessName" className="text-[10px] uppercase font-bold text-silver tracking-widest">
              Business Name <span className="text-silver/30">(Optional)</span>
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="e.g. Sanjay Motors Vashi"
              className="bg-obsidian border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-ice-white focus:outline-none focus:border-emerald-active transition-colors duration-300 placeholder:text-silver/20"
            />
          </div>
        </div>

        {/* Service */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-[10px] uppercase font-bold text-silver tracking-widest">
            Select Core Solution
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="bg-obsidian border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-ice-white focus:outline-none focus:border-emerald-active transition-colors duration-300 cursor-pointer"
          >
            {services.map((svc) => (
              <option key={svc} value={svc} className="bg-obsidian text-ice-white">
                {svc}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-[10px] uppercase font-bold text-silver tracking-widest">
            Project Overview <span className="text-champagne">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements (e.g. need new GST registration, bookkeeping setup, etc.)"
            required
            className="bg-obsidian border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm text-ice-white focus:outline-none focus:border-emerald-active transition-colors duration-300 resize-none placeholder:text-silver/20"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full bg-emerald-active hover:bg-emerald-glow text-obsidian font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-active/10"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Connect with Satkut Shamim</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
