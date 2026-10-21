import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import profile from '../config/profile';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-wrap section contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-copy"><span className="section-kicker">06 / GET IN TOUCH</span><h2>Have a good idea?<br/><em>Let's build it.</em></h2><p>Have a project in mind or want to discuss an opportunity? Send me a message.</p><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18}/>{profile.email}<ArrowUpRight size={16}/></a><div className="contact-location"><MapPin size={17}/> Pakistan · Open to remote collaboration</div></div>
        <form className="contact-form" onSubmit={submit}><label>Your name<input name="name" value={form.name} onChange={update} placeholder="e.g. Alex Morgan" required/></label><label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="alex@company.com" required/></label><label>Tell me about your project<textarea name="message" value={form.message} onChange={update} placeholder="A little about what you're building..." rows="4" required/></label><button className="button button-primary" type="submit">Prepare message <Send size={16}/></button><small>This opens your email app to send the message; no form data is stored on this website.</small></form>
      </div>
    </section>
  );
}