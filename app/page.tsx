"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Check, Star, Zap, Shield, Clock, Users, BarChart3, FileText, ArrowRight, Mail, X, Rocket, Loader2 } from "lucide-react";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_c8c3hkl";
const EMAILJS_TEMPLATE_ID = "template_c07kgo9";
const EMAILJS_PUBLIC_KEY = "gzRozBCxXCzPONUhQ";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Show popup after 1 second
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_email: email,
          to_email: "usman@legistry.ai",
        }
      );
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("EmailJS Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: "Save 80% of Your Time",
      description: "Draft contracts in 60 seconds instead of hours. Review documents in minutes, not days.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level 256-bit encryption. GDPR compliant. Your data is always protected.",
    },
    {
      icon: BarChart3,
      title: "Reduce Legal Spend",
      description: "Cut outside counsel costs by up to 60%. Handle more work in-house with AI assistance.",
    },
    {
      icon: Users,
      title: "Built for Teams",
      description: "Collaborate seamlessly with your legal team. Role-based access and approval workflows.",
    },
  ];

  const features = [
    "AI-Powered Contract Drafting",
    "Intelligent Document Review",
    "Automated Compliance Monitoring",
    "Vendor Risk Management",
    "Built-in E-Signatures",
    "Real-time Analytics",
  ];

  const stats = [
    { value: "90%", label: "Time Saved" },
    { value: "500+", label: "Legal Teams" },
    { value: "1M+", label: "Contracts Processed" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 md:p-12 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Legistry AI"
                  width={180}
                  height={60}
                  className="mx-auto"
                  style={{ width: 'auto', height: 'auto', maxWidth: 180 }}
                />
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're launching our AI-powered legal operations platform. Be the first to know when we go live!
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <Check className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">You're on the list!</h3>
                  <p className="text-gray-600">We'll notify you as soon as we launch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 outline-none transition-colors"
                    disabled={isSubmitting}
                  />
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 text-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:from-teal-700 hover:to-blue-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Notify Me"
                    )}
                  </button>
                </form>
              )}

              <p className="text-sm text-gray-500 mt-6">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Legistry AI" width={160} height={50} style={{ width: 'auto', height: 'auto', maxWidth: 160 }} priority />
            </Link>
            <a
              href="mailto:hello@legistry.ai"
              className="px-5 py-2.5 bg-teal-500 text-white rounded-lg hover:bg-teal-600 font-semibold transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered Legal Operations
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform How Your<br />
            <span className="text-teal-600">Legal Team Works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Legistry AI automates contract drafting, document review, and compliance monitoring
            so your team can focus on strategic work that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowPopup(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Request Early Access
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="mailto:hello@legistry.ai?subject=Learn More"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-xl hover:bg-teal-50 text-lg font-semibold transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-teal-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Why Legal Teams Choose Us
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to modernize your legal operations in one platform.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features List */}
      <section className="container mx-auto px-6 py-20 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Legal Platform
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-medium text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
          <Shield className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your legal data is sensitive. We protect it with bank-level 256-bit encryption,
            strict access controls, and comprehensive audit trails.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Check className="w-5 h-5 text-green-400" />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Check className="w-5 h-5 text-green-400" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Check className="w-5 h-5 text-green-400" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Legal Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading legal teams already using Legistry AI. Request early access today.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl hover:bg-gray-100 text-lg font-semibold shadow-xl transition-all"
          >
            Request Early Access
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Legistry AI"
                width={120}
                height={40}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: 120,
                  filter: 'invert(56%) sepia(75%) saturate(406%) hue-rotate(139deg) brightness(91%) contrast(89%)'
                }}
              />
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Legistry AI. All rights reserved.
            </p>
            <a href="mailto:hello@legistry.ai" className="text-teal-400 hover:text-teal-300">
              hello@legistry.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
