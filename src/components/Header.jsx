import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { links, navigation } from '../data/portfolio';

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem('zr-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* Storage can be disabled. */ }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function Header() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0c1119' : '#f7faf8');
    try { window.localStorage.setItem('zr-theme', theme); } catch { /* Optional preference. */ }
  }, [theme]);

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    const closeOnDesktop = (event) => { if (event.matches) setMenuOpen(false); };
    const desktop = window.matchMedia('(min-width: 861px)');
    window.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Zaviaar Rizvi, back to top" onClick={closeMenu}>
          <span className="brand-mark">zr<span>.</span></span>
          <span className="brand-word">Zaviaar Rizvi</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ title, href }) => <a key={href} href={href}>{title}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle icon-button" type="button"
            onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={19} strokeWidth={1.7} /> : <Moon size={19} strokeWidth={1.7} />}
          </button>
          <a className="header-resume" href={links.resume} target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
          <button className="menu-toggle icon-button" type="button" onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
          {navigation.map(({ title, href }) => <a key={href} href={href} onClick={closeMenu}>{title}</a>)}
          <a href={links.resume} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>View resume ↗</a>
        </nav>
      )}
    </header>
  );
}
