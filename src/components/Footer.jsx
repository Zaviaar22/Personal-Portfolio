import { links } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">zr<span>.</span></span><span className="brand-word">Zaviaar Rizvi</span></a>
        <span>Designed & built with curiosity. © {new Date().getFullYear()} Zaviaar Rizvi</span>
        <div className="footer-links">
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={`mailto:${links.email}`}>Email ↗</a>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
