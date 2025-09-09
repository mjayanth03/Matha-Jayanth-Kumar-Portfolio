import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Create FormData for Netlify form submission
      const submitData = new FormData();
      submitData.append('form-name', 'contact');
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(submitData as any).toString()
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <ScrollReveal direction="fade">
        <div className="bg-green-900/50 border border-green-500 rounded-lg p-6 inline-block">
          <p className="text-green-400 font-medium">Message sent successfully! You'll receive a confirmation email, and I'll get back to you soon.</p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <form 
      name="contact" 
      method="POST" 
      netlify
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit} 
      className="mt-8 space-y-4"
    >
      {/* Netlify form detection */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Honeypot field for spam protection */}
      <div style={{ display: 'none' }}>
        <input name="bot-field" />
      </div>

      {error && (
        <ScrollReveal direction="fade">
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4">
            <p className="text-red-400 font-medium">{error}</p>
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal direction="up" delay={100}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-lg border-none bg-portfolio-input text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-portfolio-gold transition-all duration-300"
        />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={200}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-lg border-none bg-portfolio-input text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-portfolio-gold transition-all duration-300"
        />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={300}>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-lg border-none bg-portfolio-input text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-portfolio-gold transition-all duration-300 resize-none"
        ></textarea>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={400}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-portfolio-gold text-portfolio-dark px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-portfolio-gold-hover hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send size={16} />
        </button>
      </ScrollReveal>
    </form>
  );
};