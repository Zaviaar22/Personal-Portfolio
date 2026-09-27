import { ArrowDownRight, ArrowUpRight, Code2, Sparkles } from 'lucide-react';
import { links } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-content">
        <div className="availability"><span className="status-dot" /> OPEN TO CONNECTING & COLLABORATING</div>
        <p className="eyebrow hero-eyebrow">HEY, I'M ZAVIAAR <span className="wave" aria-hidden="true">✳</span></p>
        <h1 id="hero-heading">Turning ideas into <span className="gradient-text">intelligent solutions.</span></h1>
        <p className="hero-description">Computer Engineering student and developer passionate about <strong>AI, software engineering and data.</strong> I enjoy building practical tools that make complex problems feel simple.</p>
        <div className="hero-buttons">
          <a className="btn btn-primary" href="#projects">Explore my work <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="btn btn-secondary" href="#contact">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="hero-socials" aria-label="Social links">
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <span className="social-divider" aria-hidden="true" />
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <span className="social-divider" aria-hidden="true" />
          <a href={`mailto:${links.email}`}>Email ↗</a>
          <span className="social-divider" aria-hidden="true" />
          <span>Milton, Ontario</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Portrait of Zaviaar Rizvi">
        <div className="hero-glow" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="portrait-frame"><img src="/assets/profile.jpg" alt="Zaviaar Rizvi" width="125" height="176" fetchPriority="high" /></div>
        <div className="floating-tag tag-code"><Code2 className="tag-icon" size={19} /> software</div>
        <div className="floating-tag tag-ai"><Sparkles className="tag-icon" size={19} /> AI + data</div>
        <div className="portrait-caption">BUILDING WHAT'S NEXT <span>↗</span></div>
      </div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <ArrowDownRight size={17} aria-hidden="true" /></a>
    </section>
  );
}
