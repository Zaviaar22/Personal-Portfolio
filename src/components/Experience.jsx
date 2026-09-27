import { experience } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading number="02" label="EXPERIENCE" id="experience-heading"
          description="A few chapters of my journey, from web development to enterprise analytics and intelligent automation.">
          Where I've <span className="gradient-text">made an impact.</span>
        </SectionHeading>
        <div className="timeline">
          {experience.map((job, index) => (
            <article className="experience-item" key={`${job.company}-${job.dates}`}>
              <div className="timeline-marker" />
              <div className="experience-date">{job.dates} {job.current && <span className="present-badge">CURRENT</span>}</div>
              <div className="experience-body">
                <div className="experience-heading">
                  <div><h3>{job.title}</h3><p className="company">{job.company} <span>· {job.location}</span></p></div>
                  <span className="job-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                {job.details.map((detail) => <p key={detail}>{detail}</p>)}
                <div className="pill-list">{job.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
