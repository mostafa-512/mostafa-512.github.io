"use client";
import { FaGithub , FaLinkedin} from "react-icons/fa";
import React, { useState } from 'react';
import Link from 'next/link';
import { Send, Mail, Smartphone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // استبدل هذا الرابط بالرابط الذي نسخته من Google Apps Script
  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzjP8SSYAxcBHbCFBnLgioLn5ieo0O9ruSPmZDiG1xL0RahrCZJE1I_n21SnmXdLOpv/exec";

  // دالة للتحقق من صحة البريد الإلكتروني
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // منع الإرسال المتكرر
    if (status === 'submitting') return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 1. التحقق من صحة البيانات (Validation) قبل الإرسال
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      setErrorMessage("Please enter a valid name.");
      setStatus('error');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus('error');
      return;
    }

    if (!subject || subject.trim().length < 3) {
      setErrorMessage("Please enter a valid subject.");
      setStatus('error');
      return;
    }


    if (!message || message.trim().length < 10) {
      setErrorMessage("Message is too short. Please provide more details.");
      setStatus('error');
      return;
    }

    // إذا مررنا من كل التحققات، نبدأ الإرسال
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        body: formData,
        // لا نحتاج لإرسال Headers معينة لأن Google Apps Script يتعامل مع FormData بشكل جيد
      });

      const data = await response.json();

      if (data.result === 'success') {
        setStatus('success');
        form.reset();
        // العودة للحالة الطبيعية بعد 4 ثواني
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error("Sorry, something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Sorry, something went wrong. Please try again later.");
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* تأثيرات الخلفية */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* معلومات التواصل */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's work <span className="text-indigo-300">together</span></h2>
            <p className="text-indigo-100/80 mb-8 max-w-md">
              I'm currently available to take on new projects or discuss full-time roles. Feel free to send me a message!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-indigo-300 shrink-0 group-hover:bg-white/10 transition-colors">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-indigo-200/60">Email</p>
                  <p className="font-medium text-white truncate">engmostafaabdalraheem@gmail.com</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-indigo-300 shrink-0 group-hover:bg-white/10 transition-colors">
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className="text-sm text-indigo-200/60">Phone</p>
                  <p className="font-medium text-white">+20 1111 03 1561</p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-indigo-300 shrink-0 group-hover:bg-white/10 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-indigo-200/60">Location</p>
                  <p className="font-medium text-white">El Obour, Qalyubia, Egypt</p>
                </div>
              </div>
            </div>

            {/* الروابط */}
            <div className="flex gap-4 mt-10">
              <Link href="https://github.com/mostafa-512" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/80  hover:bg-[#000000] transition-all">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/mostafa-abdalraheem" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/80  hover:bg-[#0A62BC] transition-all">
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* الفورم */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm text-indigo-200/80 ml-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-black/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400 focus:bg-black/20 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm text-indigo-200/80 ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-black/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400 focus:bg-black/20 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-sm text-indigo-200/80 ml-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="w-full bg-black/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400 focus:bg-black/20 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm text-indigo-200/80 ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-black/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400 focus:bg-black/20 transition-all resize-none"
              ></textarea>
            </div>

            {/* عرض رسالة الخطأ */}
            {status === 'error' && errorMessage && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-3 rounded-lg flex items-center gap-2 text-sm">
                <AlertCircle size={18} className="shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* زر الإرسال */}
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all mt-2 shadow-lg shadow-black/10 
                ${status === 'success'
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-white text-[#14005c] hover:bg-indigo-50 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0'
                }
              `}
            >
              {status === 'submitting' && 'Sending...'}
              {status === 'success' && <><CheckCircle2 size={18} /> Message Sent!</>}
              {(status === 'idle' || status === 'error') && <>Send Message <Send size={18} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}