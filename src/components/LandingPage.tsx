import { useEffect } from "react";
import "../styles/landing.css";

interface LandingPageProps {
  onOpenChat: () => void;
}

function Logomark() {
  return (
    <svg className="landing-logomark" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="7.5" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <path d="M10.5 10.5 L16.5 16 L10.5 21.5" fill="none" stroke="var(--l-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="19" y1="21.5" x2="24" y2="21.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const IconChat = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8z" />
  </svg>
);

const IconCalendar = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconMail = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const IconZap = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconCheck = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconUser = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconDoc = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconWhatsApp = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
    <path
      d="M9.2 8.4c.2 3 3.4 6.2 6.4 6.4l1-1.8-2.2-1.1-.9.7c-1.2-.6-2.5-1.9-3.1-3.1l.7-.9-1.1-2.2z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const IconGrid = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const IconSpark = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
    <path d="M18.5 15.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
  </svg>
);

const proofItems = ["sin registro", "respuesta en tiempo real", "todo queda registrado"];

const sideItems = [
  { icon: IconGrid, label: "Resumen", active: true },
  { icon: IconChat, label: "Conversaciones", active: false },
  { icon: IconCalendar, label: "Citas", active: false },
  { icon: IconDoc, label: "Documentos", active: false },
  { icon: IconZap, label: "Automatizar", active: false },
];

const panelStats = [
  { icon: IconWhatsApp, tint: "#25d366", value: "132", delta: "+12%", label: "mensajes hoy" },
  { icon: IconMail, tint: "#ea4335", value: "47", delta: "+8%", label: "emails enviados" },
  { icon: IconCalendar, tint: "#4285f4", value: "28", delta: "+10%", label: "citas esta semana" },
];

const panelFeed = [
  { icon: IconWhatsApp, tint: "#25d366", text: "Nueva conversación · Juan Pérez", time: "hace 2 min" },
  { icon: IconCalendar, tint: "#4285f4", text: "Cita agendada · María González", time: "hace 15 min" },
  { icon: IconMail, tint: "#ea4335", text: "Email enviado · propuesta comercial", time: "hace 1 h" },
];

const satellites = [
  { icon: IconMail, tint: "#ea4335", label: "Gmail", state: "Conectado", stateClass: "ok" },
  { icon: IconCalendar, tint: "#4285f4", label: "Google Calendar", state: "Sincronizando", stateClass: "sync" },
  { icon: IconWhatsApp, tint: "#25d366", label: "WhatsApp", state: "Conectado", stateClass: "ok" },
  { icon: IconUser, tint: "var(--l-accent)", label: "CRM", state: "Conectado", stateClass: "ok" },
  { icon: IconDoc, tint: "var(--l-accent-2)", label: "Documentos", state: "Activo", stateClass: "active" },
  { icon: IconSpark, tint: "var(--l-accent-2)", label: "IA", state: "Activo", stateClass: "active" },
];

const capabilities = [
  { index: "01", icon: IconChat, label: "Responder clientes" },
  { index: "02", icon: IconCalendar, label: "Agendar citas" },
  { index: "03", icon: IconMail, label: "Redactar emails" },
  { index: "04", icon: IconZap, label: "Automatizar tareas" },
];

const features = [
  {
    title: "Soporte al cliente",
    description:
      "Atiende consultas al instante con el contexto completo de la conversación. Cada respuesta queda registrada y disponible para tu equipo.",
    dominant: true,
  },
  {
    title: "Agenda inteligente",
    description: "Coordina citas y recordatorios desde la conversación, sin cambiar de herramienta.",
    dominant: false,
  },
  {
    title: "Comunicación asistida",
    description: "Emails y respuestas profesionales en segundos, con el tono de tu negocio.",
    dominant: false,
  },
  {
    title: "Automatización",
    description:
      "Convierte tareas repetitivas en flujos que se ejecutan solos mientras te ocupas de lo importante.",
    dominant: false,
  },
];

const metrics = [
  { value: "< 3 s", label: "respuesta media" },
  { value: "24/7", label: "disponibilidad" },
  { value: "100%", label: "queda registrado" },
];

const steps = [
  {
    title: "Escribe lo que necesitas",
    description: "En lenguaje natural, como se lo pedirías a una persona de tu equipo.",
  },
  {
    title: "AI OS entiende y actúa",
    description: "Interpreta la petición con el contexto de tu negocio y la resuelve.",
  },
  {
    title: "Recibe la respuesta al momento",
    description: "Todo queda registrado en la conversación, en tiempo real.",
  },
];

const navLinks = [
  { href: "#capacidades", label: "Capacidades" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#como-funciona", label: "Cómo funciona" },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function LandingPage({ onOpenChat }: LandingPageProps) {
  useReveal();

  return (
    <div className="landing">
      <nav className="landing-nav" aria-label="Principal">
        <span className="landing-brand">
          <Logomark />
          AI OS
        </span>
        <div className="landing-nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="landing-nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <button className="landing-cta landing-cta-small" onClick={onOpenChat}>
          Abrir chat
        </button>
      </nav>

      <main>
        <section className="landing-hero">
          <div className="landing-hero-copy">
            <p className="landing-kicker">Sistema operativo de IA para tu negocio</p>
            <h1>
              <span>Tu negocio.</span>
              <span>Un sistema.</span>
              <span className="landing-h1-accent">
                IA que ejecuta.
                <span className="landing-caret" aria-hidden="true" />
              </span>
            </h1>
            <p className="landing-sub">
              Un asistente conversacional que entiende tu negocio, responde a
              tus clientes y ejecuta acciones reales. Sin configuraciones
              complejas.
            </p>
            <div className="landing-hero-actions">
              <button className="landing-cta" onClick={onOpenChat}>
                Probar AI OS ahora
                <span className="landing-cta-arrow" aria-hidden="true">→</span>
              </button>
              <a className="landing-cta-ghost" href="#como-funciona">
                Ver cómo funciona
              </a>
            </div>
            <ul className="landing-proof">
              {proofItems.map((item) => (
                <li key={item}>
                  <span className="landing-proof-check">{IconCheck}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="landing-ops reveal" aria-hidden="true">
            <div className="landing-panel">
              <div className="landing-panel-bar">
                <span className="landing-panel-title">aios · panel de control</span>
                <span className="landing-panel-status">
                  <span className="landing-status-dot" />
                  en línea
                </span>
              </div>
              <div className="landing-panel-main">
                <aside className="landing-panel-side">
                  {sideItems.map((item) => (
                    <span
                      key={item.label}
                      className={`landing-side-item${item.active ? " landing-side-active" : ""}`}
                    >
                      <span className="landing-icon">{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </aside>
                <div className="landing-panel-content">
                  <div className="landing-panel-greeting">
                    <span className="landing-avatar">A</span>
                    <span>
                      <strong>Hola, Alejandro</strong>
                      <span>esto es lo que pasa en tu negocio</span>
                    </span>
                  </div>
                  <div className="landing-stats">
                    {panelStats.map((stat) => (
                      <div key={stat.label} className="landing-stat">
                        <span className="landing-stat-top">
                          <span className="landing-stat-value">{stat.value}</span>
                          <span className="landing-stat-delta">{stat.delta}</span>
                        </span>
                        <span className="landing-stat-label">
                          <span className="landing-icon" style={{ color: stat.tint }}>
                            {stat.icon}
                          </span>
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="landing-chart">
                    <span className="landing-chart-label">actividad · última semana</span>
                    <svg viewBox="0 0 120 32" preserveAspectRatio="none">
                      <polyline points="0,24 15,20 30,22 45,13 60,17 75,9 90,12 105,5 120,8" />
                    </svg>
                  </div>
                  <ul className="landing-feed">
                    {panelFeed.map((entry) => (
                      <li key={entry.text}>
                        <span className="landing-icon" style={{ color: entry.tint }}>
                          {entry.icon}
                        </span>
                        {entry.text}
                        <span className="landing-feed-time">{entry.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="landing-sats">
              {satellites.map((sat, index) => (
                <div key={sat.label} className={`landing-sat landing-sat-${index + 1}`}>
                  <span className="landing-icon" style={{ color: sat.tint }}>
                    {sat.icon}
                  </span>
                  <span>
                    <span className="landing-sat-name">{sat.label}</span>
                    <span className={`landing-sat-state landing-state-${sat.stateClass}`}>
                      <span className="landing-sat-dot" />
                      {sat.state}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="capacidades" className="landing-section" aria-labelledby="capabilities-title">
          <p className="landing-kicker">01 · Capacidades</p>
          <h2 id="capabilities-title">¿Qué puede hacer AI OS?</h2>
          <ul className="landing-capabilities reveal">
            {capabilities.map((item) => (
              <li key={item.label} className="landing-capability">
                <span className="landing-capability-index">{item.index}</span>
                <span className="landing-icon">{item.icon}</span>
                <span className="landing-capability-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="caracteristicas" className="landing-section" aria-labelledby="features-title">
          <p className="landing-kicker">02 · Características</p>
          <h2 id="features-title">Un solo lugar para operar tu negocio</h2>
          <div className="landing-bento">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`landing-bento-cell reveal${feature.dominant ? " landing-bento-dominant" : ""}`}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                {feature.dominant && (
                  <div className="landing-bento-detail" aria-hidden="true">
                    <span className="landing-status-dot" />
                    <span>respuesta enviada · registrada en la conversación</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section landing-trust" aria-labelledby="trust-title">
          <p className="landing-kicker">03 · En números</p>
          <h2 id="trust-title" className="landing-visually-hidden">
            AI OS en números
          </h2>
          <dl className="landing-metrics reveal">
            {metrics.map((metric) => (
              <div key={metric.label} className="landing-metric">
                <dt className="landing-metric-label">{metric.label}</dt>
                <dd className="landing-metric-value">{metric.value}</dd>
              </div>
            ))}
          </dl>
          <blockquote className="landing-quote reveal">
            <p>
              “La conversación es la interfaz. Todo lo demás (agenda, emails,
              tareas) debería ocurrir solo.”
            </p>
            <footer>Principio de diseño de AI OS</footer>
          </blockquote>
        </section>

        <section id="como-funciona" className="landing-section" aria-labelledby="steps-title">
          <p className="landing-kicker">04 · Cómo funciona</p>
          <h2 id="steps-title">Tres pasos, cero fricción</h2>
          <ol className="landing-steps">
            {steps.map((step) => (
              <li key={step.title} className="landing-step reveal">
                <span className="landing-step-marker" aria-hidden="true">$</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="landing-final-cta">
          <h2>Empieza a trabajar con tu asistente</h2>
          <p>Sin registro, sin configuración. Abre el chat y escribe.</p>
          <button className="landing-cta" onClick={onOpenChat}>
            Probar AI OS ahora
            <span className="landing-cta-arrow" aria-hidden="true">→</span>
          </button>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-footer-top">
          <div className="landing-footer-brand">
            <span className="landing-brand">
              <Logomark />
              AI OS
            </span>
            <p>El sistema operativo de IA para tu negocio.</p>
          </div>
          <nav className="landing-footer-cols" aria-label="Pie de página">
            <div className="landing-footer-col">
              <p className="landing-footer-heading">Producto</p>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="landing-footer-col">
              <p className="landing-footer-heading">Empezar</p>
              <button className="landing-footer-link" onClick={onOpenChat}>
                Abrir el chat
              </button>
            </div>
          </nav>
        </div>
        <div className="landing-footer-bottom">
          <span>© {new Date().getFullYear()} AI OS</span>
          <span className="landing-footer-status">
            aios v0.1 · mvp
            <span className="landing-status-dot" />
            en línea
          </span>
        </div>
      </footer>
    </div>
  );
}
