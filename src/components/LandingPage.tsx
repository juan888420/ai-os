import "../styles/landing.css";

interface LandingPageProps {
  onOpenChat: () => void;
}

const IconChat = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8z" />
  </svg>
);

const IconCalendar = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconMail = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const IconZap = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const capabilities = [
  { icon: IconChat, label: "Responder clientes" },
  { icon: IconCalendar, label: "Agendar citas" },
  { icon: IconMail, label: "Redactar emails" },
  { icon: IconZap, label: "Automatizar tareas" },
];

const features = [
  {
    icon: IconChat,
    title: "Soporte al cliente",
    description:
      "Atiende consultas al instante, con contexto de toda la conversación y disponibilidad continua.",
  },
  {
    icon: IconCalendar,
    title: "Agenda inteligente",
    description:
      "Coordina citas y recordatorios directamente desde la conversación, sin cambiar de herramienta.",
  },
  {
    icon: IconMail,
    title: "Comunicación asistida",
    description:
      "Genera emails y respuestas profesionales en segundos, con el tono de tu negocio.",
  },
  {
    icon: IconZap,
    title: "Automatización",
    description:
      "Convierte tareas repetitivas en flujos automáticos que se ejecutan mientras te ocupas de lo importante.",
  },
];

const steps = [
  {
    title: "Escribe lo que necesitas",
    description: "En lenguaje natural, como se lo pedirías a una persona de tu equipo.",
  },
  {
    title: "La IA entiende y actúa",
    description: "AI OS interpreta la petición con el contexto de tu negocio y la resuelve.",
  },
  {
    title: "Recibe la respuesta al momento",
    description: "Todo queda registrado en la conversación, en tiempo real.",
  },
];

export function LandingPage({ onOpenChat }: LandingPageProps) {
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
          <div className="landing-hero-copy">
            <h1>
              El sistema operativo de <span className="landing-accent">IA</span> para tu negocio
            </h1>
            <p>
              Un asistente conversacional que entiende tu negocio, responde a tus
              clientes y ejecuta acciones reales. Sin configuraciones complejas.
            </p>
            <button className="landing-cta" onClick={onOpenChat}>
              Probar el chat
            </button>
          </div>

          <div className="landing-mockup" aria-hidden="true">
            <div className="landing-mockup-bar">
              <span className="landing-mockup-dot" />
              <span className="landing-mockup-dot" />
              <span className="landing-mockup-dot" />
            </div>
            <div className="landing-mockup-body">
              <div className="landing-mockup-bubble landing-mockup-user">
                ¿Puedes agendar una reunión con el equipo mañana a las 10?
              </div>
              <div className="landing-mockup-bubble landing-mockup-assistant">
                Hecho. Reunión creada para mañana a las 10:00 y aviso enviado al equipo.
              </div>
              <div className="landing-mockup-bubble landing-mockup-user">
                Perfecto, redacta un resumen para el cliente.
              </div>
              <div className="landing-mockup-bubble landing-mockup-assistant landing-mockup-typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        <section className="landing-section" aria-labelledby="capabilities-title">
          <h2 id="capabilities-title">¿Qué puede hacer AI OS?</h2>
          <ul className="landing-capabilities">
            {capabilities.map((item) => (
              <li key={item.label} className="landing-capability">
                <span className="landing-icon">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </section>

        <section className="landing-section" aria-labelledby="features-title">
          <h2 id="features-title">Características</h2>
          <div className="landing-features">
            {features.map((feature) => (
              <article key={feature.title} className="landing-feature">
                <span className="landing-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section" aria-labelledby="steps-title">
          <h2 id="steps-title">Cómo funciona</h2>
          <ol className="landing-steps">
            {steps.map((step, index) => (
              <li key={step.title} className="landing-step">
                <span className="landing-step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
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
        <span>© {new Date().getFullYear()} — MVP</span>
      </footer>
    </div>
  );
}
