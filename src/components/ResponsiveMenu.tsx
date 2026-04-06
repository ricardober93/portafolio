import { useEffect, useState } from 'preact/hooks';
import { navigation, featuredLinks } from '@/data/site';

export default function ResponsiveMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="menu-shell">
      <button
        className="menu-trigger focus-ring"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
        <span aria-hidden="true">≡</span>
      </button>

      <div className={`menu-backdrop ${open ? 'open' : ''}`} aria-hidden="true" onClick={() => setOpen(false)} />

      <div id="mobile-menu" className={`menu-panel ${open ? 'open' : ''}`}>
        <div className="menu-panel__top">
          <span className="eyebrow">Navigation</span>
          <button className="close-btn focus-ring" type="button" onClick={() => setOpen(false)}>
            Cerrar
          </button>
        </div>

        <nav className="menu-links" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a className="menu-link" href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="menu-meta">
          {featuredLinks.map((item) => (
            <a className="chip focus-ring" href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .menu-shell {
          position: relative;
          z-index: 50;
        }
        .menu-trigger {
          display: none;
          align-items: center;
          gap: 12px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.75);
          color: var(--ink);
          padding: 12px 16px;
          border-radius: 999px;
          cursor: pointer;
        }
        .menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(17, 17, 17, 0.42);
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms ease;
        }
        .menu-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }
        .menu-panel {
          position: fixed;
          inset: 0 0 auto auto;
          width: min(92vw, 360px);
          height: 100dvh;
          padding: 22px;
          background: rgba(250, 247, 241, 0.96);
          border-left: 1px solid var(--line);
          transform: translateX(100%);
          transition: transform 220ms ease;
          display: flex;
          flex-direction: column;
          gap: 28px;
          box-shadow: -20px 0 60px rgba(17, 17, 17, 0.08);
        }
        .menu-panel.open {
          transform: translateX(0);
        }
        .menu-panel__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .close-btn {
          border: 0;
          background: transparent;
          padding: 0;
          color: var(--ink);
          font-weight: 700;
          cursor: pointer;
        }
        .menu-links {
          display: grid;
          gap: 12px;
        }
        .menu-link {
          font-family: 'Anton', sans-serif;
          font-size: clamp(2rem, 8vw, 3rem);
          text-transform: uppercase;
          line-height: 0.95;
          letter-spacing: -0.02em;
        }
        .menu-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }
        @media (max-width: 900px) {
          .menu-trigger {
            display: inline-flex;
          }
        }
      `}</style>
    </div>
  );
}
