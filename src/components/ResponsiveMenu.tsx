import { useEffect, useState } from 'preact/hooks';
import { localizeHref, type Locale } from '@/data/site';

type NavigationItem = {
  label: string;
  href: string;
};

type FeaturedLink = {
  label: string;
  href: string;
};

type ResponsiveMenuProps = {
  locale: Locale;
  navigation: NavigationItem[];
  featuredLinks: FeaturedLink[];
  menuLabel: string;
  closeLabel: string;
  navigationLabel: string;
  ariaLabel: string;
};

export default function ResponsiveMenu({
  locale,
  navigation,
  featuredLinks,
  menuLabel,
  closeLabel,
  navigationLabel,
  ariaLabel,
}: ResponsiveMenuProps) {
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
        <span>{open ? closeLabel : menuLabel}</span>
        <span aria-hidden="true">≡</span>
      </button>

      <div className={`menu-backdrop ${open ? 'open' : ''}`} aria-hidden="true" onClick={() => setOpen(false)} />

      <div id="mobile-menu" className={`menu-panel ${open ? 'open' : ''}`}>
        <div className="menu-panel__top">
          <span className="eyebrow">{navigationLabel}</span>
          <button className="close-btn focus-ring" type="button" onClick={() => setOpen(false)}>
            {closeLabel}
          </button>
        </div>

        <nav className="menu-links" aria-label={ariaLabel}>
          {navigation.map((item) => (
            <a className="menu-link" href={localizeHref(locale, item.href)} onClick={() => setOpen(false)}>
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
          background: var(--surface);
          color: var(--ink);
          padding: 10px 14px;
          border-radius: 2px;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
        }
        .menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(17, 17, 17, 0.42);
          display: none;
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms ease;
        }
        .menu-backdrop.open {
          display: block;
          opacity: 1;
          pointer-events: auto;
        }
        .menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(92vw, 360px);
          padding: 22px;
          background: rgba(247, 247, 244, 0.98);
          border-left: 1px solid var(--line);
          transform: translateX(100%);
          transition: transform 220ms ease;
          display: flex;
          flex-direction: column;
          gap: 26px;
          overflow-y: auto;
          visibility: hidden;
          pointer-events: none;
        }
        .menu-panel.open {
          transform: translateX(0);
          visibility: visible;
          pointer-events: auto;
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
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
        }
        .menu-links {
          display: grid;
          gap: 10px;
        }
        .menu-link {
          padding: 16px 0;
          border-top: 1px solid var(--line);
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(1.8rem, 8vw, 3rem);
          text-transform: uppercase;
          line-height: 0.88;
          letter-spacing: -0.05em;
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
