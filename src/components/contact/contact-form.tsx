// ============================================
// Contact Form — Client Component
// ============================================

"use client";

import { useState } from "react";
import { Mail, Send, Clock, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/types";

interface ContactFormProps {
  dict: Dictionary["contact"];
}

function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO: Integrate with a form backend service (Formspree, Web3Forms, etc.)
    // For now, open a mailto link as fallback
    const mailtoLink = `mailto:{{LEGAL_EMAIL}}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <Card>
          <CardContent className="py-12 text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <p className="text-lg font-semibold text-grey-900">
              {dict.form.successMessage}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary-100 rounded-lg">
            <Mail className="w-5 h-5 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold text-grey-900">{dict.title}</h1>
        </div>
        <p className="text-sm text-grey-500">{dict.subtitle}</p>
      </div>

      {/* Contact Form */}
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label={dict.form.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe"
              />
              <Input
                label={dict.form.email}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="john@company.com"
              />
            </div>

            <Input
              label={dict.form.subject}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="Business inquiry, bug report, suggestion..."
            />

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-grey-700"
              >
                {dict.form.message}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell us more..."
                className="
                  w-full px-3 py-2.5 rounded-lg border border-grey-300
                  text-sm text-grey-900 placeholder:text-grey-400
                  bg-white resize-y
                  transition-all duration-200
                  hover:border-grey-400
                  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                "
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              <Send className="w-4 h-4" />
              {dict.form.submit}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card>
        <CardContent className="py-5">
          <h2 className="text-sm font-semibold text-grey-900 mb-3">
            {dict.info.title}
          </h2>
          <div className="space-y-2 text-sm text-grey-600">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-grey-400" />
              {dict.info.email}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-grey-400" />
              {dict.info.responseTime}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export { ContactForm };
