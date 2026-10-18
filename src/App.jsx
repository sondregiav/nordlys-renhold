import './App.css'

// Replace this placeholder with a real recipient address before accepting inquiries.
const CONTACT_EMAIL = 'REPLACE_WITH_REAL_CONTACT_EMAIL'

const services = [
  {
    title: 'Hjemmerenhold',
    description:
      'Renhold hjemme hos deg, enten du ønsker en fast avtale eller hjelp ved en enkelt anledning.',
  },
  {
    title: 'Kontorrenhold',
    description:
      'Renhold for mindre kontorer og arbeidsplasser, tilpasset lokalene og behovene deres.',
  },
  {
    title: 'Flyttevask',
    description:
      'En grundig rengjøring av boligen når du skal flytte ut. Omfang avtales på forhånd.',
  },
]

const processSteps = [
  {
    title: 'Fortell oss hva du trenger',
    description:
      'Beskriv type renhold, størrelse på boligen eller arbeidsplassen og hva du ønsker hjelp med.',
  },
  {
    title: 'Motta et tilpasset tilbud',
    description:
      'Behovene dine danner grunnlaget for et tilbud med avklart omfang og pris.',
  },
  {
    title: 'Avtal tidspunkt og detaljer',
    description:
      'Hvis tilbudet passer, avtaler dere tidspunkt og praktiske detaljer sammen.',
  },
]

const faqItems = [
  {
    question: 'Hvilke områder dekker dere?',
    answer:
      'Dekningsområdet er ikke fastsatt i dette konseptprosjektet. Eventuelle områder må avklares når du ber om tilbud.',
  },
  {
    question: 'Tilbyr dere både fast renhold og engangsvask?',
    answer:
      'Konseptet viser begge deler som mulige tjenester. Tilgjengelighet og omfang må avtales når du ber om tilbud.',
  },
  {
    question: 'Hvordan beregnes prisen?',
    answer:
      'Prisen vil avhenge av type renhold, størrelsen på boligen eller arbeidsplassen og hva oppdraget omfatter.',
  },
  {
    question: 'Hvordan ber jeg om et tilbud?',
    answer:
      'Bruk skjemaet på denne siden til å beskrive hva du trenger. Skjemaet er foreløpig bare en del av konseptet og sender ikke meldinger.',
  },
]

function App() {
  const currentYear = new Date().getFullYear()

  function handleContactSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    if (CONTACT_EMAIL === 'REPLACE_WITH_REAL_CONTACT_EMAIL') {
      form.querySelector('[role="status"]').textContent =
        'E-postmottaker er ikke konfigurert ennå. Skjemaet trenger en reell mottakeradresse før e-post kan klargjøres.'
      return
    }

    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')
    const service = form.querySelector('#contact-service').selectedOptions[0].text
    const message = formData.get('message')

    const subject = `Forespørsel om renhold fra ${name}`
    const body = [
      `Navn: ${name}`,
      `E-post: ${email}`,
      `Type renhold: ${service}`,
      '',
      'Melding:',
      message,
    ].join('\n')

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Hopp til hovedinnhold
      </a>

      <header className="site-header" id="top">
        <a className="site-logo" href="#top">
          Nordlys Renhold
        </a>

        <nav className="primary-navigation" aria-label="Hovedmeny">
          <ul className="navigation-list">
            <li><a href="#services">Tjenester</a></li>
            <li><a href="#benefits">Hvorfor oss</a></li>
            <li><a href="#process">Slik fungerer det</a></li>
            <li><a href="#pricing">Priser</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>

        <a className="button button-primary header-cta" href="#contact">
          Be om tilbud
        </a>
      </header>

      <main id="main">
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <p className="concept-label">Et konseptprosjekt</p>
          <h1 id="hero-title">Et rent hjem. Mer tid til hverdagen.</h1>
          <p className="hero-description">
            Nordlys Renhold er et konsept for renhold i hjem og på arbeidsplasser.
            Her kan du utforske tjenester og beskrive hva du ønsker hjelp med.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Be om tilbud
            </a>
            <a className="button button-secondary" href="#services">
              Se våre tjenester
            </a>
          </div>
        </section>

        <section className="content-section services-section" id="services">
          <div className="section-intro">
            <p className="section-eyebrow">Tjenester</p>
            <h2>Renhold til ulike behov</h2>
            <p>
              Se forslag til tjenester for hjemmet, arbeidsplassen og når du
              skal flytte.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section benefits-section" id="benefits">
          <div className="section-intro">
            <p className="section-eyebrow">Hvorfor oss</p>
            <h2>Prinsipper for en god opplevelse</h2>
            <p>
              Dette er verdiene konseptet bygger på, ikke kundeuttalelser eller
              dokumenterte resultater.
            </p>
          </div>
          <ul className="benefit-list">
            <li className="benefit-item">
              <h3>Tydelig kommunikasjon</h3>
              <p>
                Vi legger opp til å avklare forventninger, omfang og praktiske
                detaljer før et oppdrag.
              </p>
            </li>
            <li className="benefit-item">
              <h3>Fleksible løsninger</h3>
              <p>
                Renholdet kan ta utgangspunkt i behovene og rammene du beskriver.
              </p>
            </li>
            <li className="benefit-item">
              <h3>Fokus på detaljer</h3>
              <p>
                Vi ønsker å avtale hvilke områder og oppgaver som er viktige for
                deg.
              </p>
            </li>
          </ul>
        </section>

        <section className="content-section process-section" id="process">
          <div className="section-intro">
            <p className="section-eyebrow">Slik fungerer det</p>
            <h2>Tre steg fra behov til avtale</h2>
          </div>
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li className="process-step" key={step.title}>
                <span className="process-step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section pricing-section" id="pricing">
          <div className="section-intro">
            <p className="section-eyebrow">Priser</p>
            <h2>Et tilbud tilpasset oppdraget</h2>
            <p>
              Prisen avhenger av type renhold, størrelsen på boligen eller
              arbeidsplassen og omfanget du ønsker. Beskriv behovet ditt, så kan
              et tilbud ta utgangspunkt i detaljene.
            </p>
          </div>
          <a className="button button-primary" href="#contact">
            Be om tilbud
          </a>
        </section>

        <section className="content-section faq-section" id="faq">
          <div className="section-intro">
            <p className="section-eyebrow">FAQ</p>
            <h2>Ofte stilte spørsmål</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-intro">
            <p className="section-eyebrow">Kontakt</p>
            <h2>Fortell oss hva du trenger</h2>
            <p>
              Beskriv gjerne hvor du ønsker renhold, hva oppdraget gjelder og
              hvilke detaljer vi bør kjenne til.
            </p>
          </div>

          <form
            className="contact-form"
            noValidate
            onSubmit={handleContactSubmit}
          >
            <div className="form-field">
              <label htmlFor="contact-name">Navn</label>
              <input
                autoComplete="name"
                id="contact-name"
                name="name"
                required
                type="text"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">E-post</label>
              <input
                autoComplete="email"
                id="contact-email"
                name="email"
                required
                type="email"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-service">Type renhold</label>
              <select id="contact-service" name="service" required defaultValue="">
                <option value="" disabled>Velg type renhold</option>
                <option value="home">Hjemmerenhold</option>
                <option value="office">Kontorrenhold</option>
                <option value="moving">Flyttevask</option>
                <option value="other">Annet eller usikker</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Melding</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows="5"
              />
            </div>

            <button className="button button-primary" type="submit">
              Klargjør forespørsel
            </button>
            <p className="form-note">
              Skjemaet klargjør en e-post i e-postprogrammet ditt, men sender
              den ikke automatisk.
            </p>
            <p className="form-note" role="status" aria-live="polite" />
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="site-logo" href="#top">
          Nordlys Renhold
        </a>
        <p>
          Et fiktivt konseptprosjekt. Tjenestene og skjemaet er eksempler, ikke
          et tilbud fra en operativ virksomhet.
        </p>
        <nav aria-label="Bunnmeny">
          <ul className="footer-navigation">
            <li><a href="#services">Tjenester</a></li>
            <li><a href="#pricing">Priser</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
        <p className="copyright">
          &copy; {currentYear} Nordlys Renhold
        </p>
      </footer>
    </>
  )
}

export default App
