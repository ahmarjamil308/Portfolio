import { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import profile from '../config/profile';
import InteractiveCard3D from './InteractiveCard3D';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const submit = (e) => {
    e.preventDefault();

    // Trigger celebratory confetti burst!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#a855f7', '#ec4899', '#6ee7b7']
    });

    setSentSuccess(true);

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Ahmar,\n\nMy name is ${form.name} (${form.email}).\n\nProject details:\n${form.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }, 700);
  };

  return (
    <section className="section-wrap section contact-section" id="contact">
      <InteractiveCard3D className="contact-panel glass-card" maxTilt={4} glare={true}>
        {/* Left column / Info */}
        <div className="contact-copy">
          <span className="section-kicker">06 / LET'S CONNECT</span>
          <h2>
            Have a bold idea?<br />
            <em>Let's build it together.</em>
          </h2>
          <p>
            Whether you need a cutting-edge 3D web application, a full-stack product,
            or a mobile app with Flutter, I'm currently open to new opportunities and freelance contracts.
          </p>

          {/* Email button with copy feature */}
          <div className="contact-actions-row">
            <a
              className="contact-email-btn"
              href={`mailto:${profile.email}`}
            >
              <Mail size={18} className="email-icon" />
              <span>{profile.email}</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              className="copy-email-btn"
              onClick={handleCopyEmail}
              aria-label="Copy email"
              title="Copy to clipboard"
            >
              {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* WhatsApp Direct Chat */}
          <div className="contact-alt-methods">
            <a
              href={`https://wa.me/${profile.social.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={18} />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

          <div className="contact-location">
            <MapPin size={17} />
            <span>Pakistan · Open to Worldwide Remote Roles & Contracts</span>
          </div>
        </div>

        {/* Right column / Form */}
        <form className="contact-form" onSubmit={submit}>
          <div className="form-header">
            <Sparkles size={16} className="text-purple" />
            <span>Send a Direct Dispatch</span>
          </div>

          <label>
            <span>Your Name</span>
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="e.g. Alex Morgan"
              required
            />
          </label>

          <label>
            <span>Email Address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="alex@company.com"
              required
            />
          </label>

          <label>
            <span>Project Details</span>
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Tell me a bit about what you want to build, timelines, or your team..."
              rows="4"
              required
            />
          </label>

          <button
            className="button button-primary form-submit-btn"
            type="submit"
          >
            <span>{sentSuccess ? 'Opening Mail Client...' : 'Dispatch Message'}</span>
            <Send size={16} />
          </button>

          <small>
            Clicking dispatch opens your native email client with prefilled details.
            No personal data is collected or tracked on this site.
          </small>
        </form>
      </InteractiveCard3D>
    </section>
  );
}
