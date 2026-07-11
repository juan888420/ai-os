import { useEffect } from "react";
import "../styles/landing.css";

interface LandingPageProps {
  onOpenChat: () => void;
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
        <span className="landing-brand">AI OS</span>
        <button className="landing-cta landing-cta-small" onClick={onOpenChat}>
          Abrir chat
        </button>
      </nav>

      <main>
        <section className="landing-hero">
          <p className="landing-kicker">Sistema operativo de negocio</p>
          <h1>
            Escribe lo que tu negocio necesita.
            <br />
            AI OS lo ejecuta.
            <span className="landing-caret" aria-hidden="true" />
          </h1>
          <p className="landing-sub">
            Un asistente conversacional que entiende tu negocio, responde a tus
            clientes y ejecuta acciones reales. Sin configuraciones complejas.
          </p>
          <button className="landing-cta" onClick={onOpenChat}>
            Probar el chat
          </button>

          <div className="landing-console reveal" aria-hidden="true">
            <div className="landing-console-bar">
              <span className="landing-console-title">aios — operaciones</span>
              <span className="landing-console-status">
                <span className="landing-status-dot" />
                en línea
              </span>
            </div>
            <div className="landing-console-body">
              <div className="landing-console-bubble landing-console-user">
                ¿Puedes agendar una reunión con el equipo mañana a las 10?
              </div>
              <div className="landing-console-bubble landing-console-assistant">
                Hecho. Reunión creada para mañana a las 10:00 y aviso enviado al equipo.
              </div>
              <div className="landing-console-bubble landing-console-user">
                Perfecto, redacta un resumen para el cliente.
              </div>
              <div className="landing-console-bubble landing-console-assistant landing-console-typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        <section className="landing-section" aria-labelledby="capabilities-title">
          <p className="landing-kicker">01 — Capacidades</p>
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

        <section className="landing-section" aria-labelledby="features-title">
          <p className="landing-kicker">02 — Características</p>
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

        <section className="landing-section" aria-labelledby="steps-title">
          <p className="landing-kicker">03 — Cómo funciona</p>
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
            Abrir el chat
          </button>
        </section>
      </main>

      <footer className="landing-footer">
        <span className="landing-brand">AI OS</span>
        <span className="landing-footer-status">
          aios v0.1 — mvp
          <span className="landing-status-dot" />
          en línea
        </span>
      </footer>
    </div>
  );
}
