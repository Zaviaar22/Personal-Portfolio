import { useState } from 'react';
import { FaAws } from "react-icons/fa6";
import { SiCss } from "react-icons/si";
import {
  SiC, SiConfluence, SiDocker, SiFlask, SiGit,
  SiGithub, SiHtml5, SiJavascript, SiJira, SiLinux, SiMysql, SiNumpy,
  SiPandas, SiPostman, SiPython, SiReact, SiTailwindcss, SiVite,
} from 'react-icons/si';
import { BarChart3, Bot, Braces, CloudCog, CodeXml, Database, Globe2, MapPin, Workflow } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import SectionHeading from './SectionHeading';

// Recognizable brand SVGs when available; simple neutral symbols for products
// without an included brand icon. No remote icon requests are needed.
const icons = {
  Python: SiPython, JavaScript: SiJavascript, SQL: SiMysql, C: SiC,
  HTML5: SiHtml5, CSS: SiCss, React: SiReact, 'Tailwind CSS': SiTailwindcss,
  Flask: SiFlask, Pandas: SiPandas, NumPy: SiNumpy, AWS: FaAws,
  Git: SiGit, GitHub: SiGithub, Docker: SiDocker, Linux: SiLinux,
  Vite: SiVite, Postman: SiPostman, Jira: SiJira, Confluence: SiConfluence,
  'Power BI': BarChart3, 'Power Automate': Workflow, 'Copilot Studio': Bot,
  Dataverse: Database, 'Dynamics 365': CloudCog, 'REST APIs': CodeXml,
  'Azure Maps API': MapPin, 'Gemini API': Bot, Tableau: BarChart3,
  Java: Braces, MATLAB: Braces, VHDL: Braces,
};

// Colors are decorative only: labels and tooltips convey technology names.
const brandColors = {
  Python: '#3776AB', JavaScript: '#F7DF1E', SQL: '#4479A1',
  C: '#A8B9CC', Java: '#ED8B00', HTML5: '#E34F26', CSS3: '#1572B6',
  React: '#61DAFB', 'Tailwind CSS': '#06B6D4', Flask: '#a8b4ac',
  Pandas: '#bca8fb', NumPy: '#4DABCF', AWS: '#FF9900', Git: '#F05032',
  GitHub: '#bcbfc6', Docker: '#2496ED', Linux: '#FCC624', Vite: '#A97BFF',
  Postman: '#FF6C37', Jira: '#2684FF', Confluence: '#579DFF',
};

function SkillTile({ name }) {
  const Icon = icons[name] || Globe2;
  return (
    <div className="skill-tile group relative flex min-h-22 flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center transition-all duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
      tabIndex={0} role="img" aria-label={name}>
      <Icon className="skill-logo" size={31} style={{ color: brandColors[name] || 'var(--accent)' }} aria-hidden="true" />
      <span className="skill-name text-xs font-medium leading-tight">{name}</span>
      <span className="skill-tooltip pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');
  const groups = activeFilter === 'All' ? skillGroups : skillGroups.filter((group) => group.title === activeFilter);

  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading number="04" label="MY TOOLKIT" id="skills-heading"
          description="Technologies I've used across projects, co-op roles, coursework and this portfolio.">
          Tools of <span className="gradient-text">the trade.</span>
        </SectionHeading>
        <div className="skill-filters mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter skill categories">
          {['All', ...skillGroups.map((group) => group.title)].map((filter) => (
            <button key={filter} type="button" onClick={() => setActiveFilter(filter)}
              className={`skill-filter rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${activeFilter === filter ? 'selected' : ''}`}
              aria-pressed={activeFilter === filter}>
              {filter}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {groups.map((group) => (
            <div key={group.title} className="skill-group">
              <div className="skill-group-icon" aria-hidden="true">{group.symbol}</div>
              <h3>{group.title}</h3>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-5">
                {group.skills.map((name) => <SkillTile key={name} name={name} />)}
              </div>
            </div>
          ))}
        </div>
        <p className="skills-note mt-7 text-sm">React, Tailwind CSS and Vite power this portfolio. Hover or focus on a technology icon to see its name.</p>
      </div>
    </section>
  );
}
