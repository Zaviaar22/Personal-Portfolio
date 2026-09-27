import { useState } from 'react';
import { Check, Copy, ArrowUpRight } from 'lucide-react';
import { links } from '../data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard access can be blocked on an insecure local preview.
      window.location.href = `mailto:${links.email}`;
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner">
        <span className="contact-overline"><span className="status-dot" /> LET'S MAKE SOMETHING GREAT</span>
        <h2 id="contact-heading">Have an idea?<br /><span className="gradient-text">Let's connect.</span></h2>
        <p>I'm always interested in learning, collaborating, and connecting with people building interesting things.</p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${links.email}?subject=Let's%20connect`}>Say hello <ArrowUpRight size={17} aria-hidden="true" /></a>
          <button className="btn btn-outline" onClick={copyEmail} type="button" aria-live="polite">
            {copied ? 'Copied!' : 'Copy email'} {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          </button>
        </div>
        <a className="contact-email" href={`mailto:${links.email}`}>{links.email} ↗</a>
      </div>
    </section>
  );
}
