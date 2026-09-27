import { ArrowUpRight } from 'lucide-react';
import { links } from '../data/portfolio';

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-kicker"><span>01 / ABOUT ME</span><span className="kicker-line" /></div>
        <div className="about-grid">
          <div>
            <h2 id="about-heading" className="section-title">Curious by nature.<br /><span className="muted-heading">Driven to build.</span></h2>
            <div className="about-card"><span className="about-card-icon">↗</span><span>Always learning.<br />Always building.</span></div>
          </div>
          <div className="about-copy">
            <p>I'm a Computer Engineering (Co-op) student at the <strong>University of Guelph</strong>, with a strong interest in the intersection of software, artificial intelligence, and real-world problem solving.</p>
            <p>Through my co-op experiences, I've worked with enterprise data, built automation workflows, explored AI agents, developed web experiences, and helped teams turn technical challenges into useful solutions.</p>
            <p>Whether I'm optimizing a data pipeline or working on a full-stack project, I bring the same approach: stay curious, collaborate openly, and keep improving.</p>
            <a className="text-link" href={links.resume} target="_blank" rel="noopener noreferrer">More about my background <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="quick-facts">
          <div><span className="fact-label">CURRENTLY</span><strong>AI & Automation Developer Co-op</strong><span>Hammond Power Solutions</span></div>
          <div><span className="fact-label">STUDYING</span><strong>Computer Engineering</strong><span>University of Guelph · Expected 2027</span></div>
          <div><span className="fact-label">INTERESTED IN</span><strong>Software, data & AI</strong><span>Always open to the next challenge</span></div>
        </div>
      </div>
    </section>
  );
}
