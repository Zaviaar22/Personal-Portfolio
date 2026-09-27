import { ArrowUpRight, Github } from 'lucide-react';
import { links, projects } from '../data/portfolio';

function NeuralinqArtwork() {
  return (
    <div className="project-art art-neuralinq" aria-hidden="true">
      <div className="art-topline"><span className="mini-mark">✳</span><span className="mock-label">NEURALINQ / LEARNING PLATFORM</span><span className="mock-dots">•••</span></div>
      <div className="lesson-mock">
        <div className="lesson-left"><span className="mock-pill">YOUR LEARNING SPACE</span><strong>Learning, made<br /><em>personal.</em></strong><span className="mock-bar"><i /></span><small>Progress that grows with you →</small></div>
        <div className="lesson-right"><div className="brain-shape">✳</div><div className="mini-stat"><small>MASTERY SCORE</small><strong>84%</strong><span className="stat-track"><i /></span></div></div>
      </div>
      <div className="art-corner">01 ↗</div>
    </div>
  );
}

function TreasureArtwork() {
  return (
    <div className="project-art art-treasure" aria-hidden="true">
      <div className="art-topline"><span className="terminal-dots"><i /><i /><i /></span><span className="mock-label">TREASURE RUNNER / TERMINAL</span><span className="mock-dots">_ □ ×</span></div>
      <div className="terminal-mock">
        <div className="terminal-title">$ ./treasure_runner <span className="cursor">█</span></div>
        <pre>{`┌─────────────────────────┐
│  ◈      ┌─────┐        │
│         │  ?  │  ◆     │
│    ┌────┘     └───┐    │
│    │      @       │    │
│    └──────────────┘    │
│   ▒▒▒       ◇          │
└─────────────────────────┘`}</pre>
        <div className="terminal-bottom">&gt; YOUR ADVENTURE AWAITS<span>▂</span></div>
      </div>
      <div className="art-corner">02 ↗</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-kicker"><span>03 / SELECTED PROJECTS</span><span className="kicker-line" /></div>
        <div className="section-intro projects-intro">
          <div><h2 id="projects-heading" className="section-title">Ideas brought <span className="gradient-text">to life.</span></h2><p>A selection of things I've built and problems I've enjoyed solving.</p></div>
          <a className="text-link desktop-project-link" href={links.github} target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={17} /></a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {project.id === 'neuralinq' ? <NeuralinqArtwork /> : <TreasureArtwork />}
              <div className="project-detail">
                <div className="project-meta">{project.eyebrow}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="pill-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <a className="project-code-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`}>
                  <Github size={17} aria-hidden="true" /> View code on GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link mobile-project-link" href={links.github} target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={17} /></a>
      </div>
    </section>
  );
}
