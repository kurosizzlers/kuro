import Link from "next/link";



const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          When you use our website, particularly our reservation and enquiry
          form, you may choose to provide us with personal information.
        </p>

        <p className="mt-4">This may include:</p>

        <ul className="mt-4 space-y-2 text-white/60">
          <li>• Your name</li>
          <li>• Email address</li>
          <li>• Phone number, if provided</li>
          <li>• Type of enquiry</li>
          <li>• Preferred reservation date</li>
          <li>• Number of guests</li>
          <li>• Message or other information you voluntarily provide</li>
        </ul>

        <p className="mt-4">
          We aim to collect only the information reasonably required to
          respond to your enquiry or assist with your reservation.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          Information submitted through our website is used primarily to
          process and respond to reservations, group dining requests and
          general enquiries.
        </p>

        <p className="mt-4">We may use the information to:</p>

        <ul className="mt-4 space-y-2 text-white/60">
          <li>• Respond to your enquiry</li>
          <li>• Assist with a table reservation request</li>
          <li>• Coordinate group dining or special gathering requests</li>
          <li>• Contact you regarding the request you submitted</li>
          <li>• Provide information you have requested from us</li>
        </ul>

        <p className="mt-4">
          We do not intend to use information submitted through the enquiry
          form for unrelated purposes without an appropriate basis or
          permission where required.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Form Processing & Web3Forms",
    content: (
      <>
        <p>
          Our website uses Web3Forms, a third-party form processing service,
          to process information submitted through our reservation and
          enquiry form and deliver submissions to the designated email
          account used by Kuro Sizzlers.
        </p>

        <p className="mt-4">
          This means information you submit through the form is transmitted
          to and processed through Web3Forms as part of delivering your
          enquiry to us.
        </p>

        <p className="mt-4">
          Web3Forms may retain form submissions in accordance with the
          retention settings and policies applicable to the service. Its
          data-handling practices are governed by its own terms and privacy
          documentation.
        </p>

        <p className="mt-4">
          We encourage users who would like more information about such
          processing to review the privacy information provided by the
          relevant service provider.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Data Retention",
    content: (
      <>
        <p>
          Personal information received through enquiries or reservation
          requests may be retained for as long as reasonably necessary to
          respond to the request, manage related communication, maintain
          appropriate business records, resolve issues, or meet applicable
          legal requirements.
        </p>

        <p className="mt-4">
          Where personal information is no longer required for the purpose
          for which it was collected, we may delete or otherwise dispose of
          it, subject to applicable legal or legitimate record-keeping
          requirements.
        </p>

        <p className="mt-4">
          Information processed by third-party service providers may also be
          subject to their respective retention policies and account
          settings.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Data Security",
    content: (
      <>
        <p>
          We take reasonable steps to protect personal information handled
          through our website from unauthorised access, misuse, loss or
          disclosure.
        </p>

        <p className="mt-4">
          Information submitted through our website is transmitted using
          web technologies and third-party services that provide security
          measures for data transmission and processing.
        </p>

        <p className="mt-4">
          However, no method of transmitting or storing information over the
          internet can be guaranteed to be completely secure.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Sharing of Information",
    content: (
      <>
        <p>
          We do not intend to sell personal information submitted through
          our website.
        </p>

        <p className="mt-4">
          Information may be processed by service providers that help us
          operate website functionality, receive enquiries or provide
          related services. This includes our form-processing provider.
        </p>

        <p className="mt-4">
          Information may also be disclosed where required under applicable
          law, regulation, legal process or lawful governmental request.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Your Privacy Choices & Requests",
    content: (
      <>
        <p>
          Subject to applicable law, you may contact Kuro Sizzlers regarding
          personal information that you have submitted through our website.
        </p>

        <p className="mt-4">
          Depending on the circumstances and applicable requirements, you
          may request assistance concerning correction, updating or deletion
          of personal information, or communicate a privacy-related concern.
        </p>

        <p className="mt-4">
          Where processing is based on your consent, you may also communicate
          your request to withdraw that consent. Certain information may
          still need to be retained or processed where permitted or required
          by applicable law.
        </p>

        <p className="mt-4">
          You can contact us using the contact information provided at the
          end of this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Cookies & Similar Technologies",
    content: (
      <>
        <p>
          Our website may use technologies that are necessary for website
          functionality, performance, security or features provided by
          third-party services.
        </p>

        <p className="mt-4">
          If additional analytics, advertising or tracking technologies are
          introduced, this Privacy Policy may be updated to provide
          appropriate information about their use.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Third-Party Websites & Services",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites and services,
          including online ordering platforms, social media platforms and
          map services.
        </p>

        <p className="mt-4">
          When you follow a link to a third-party service, your interaction
          with that service is governed by its own privacy policy and terms.
          Kuro Sizzlers does not control the privacy practices of independent
          third-party websites.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Children's Personal Data",
    content: (
      <>
        <p>
          This website and its enquiry form are not specifically designed
          for collecting personal information from children.
        </p>

        <p className="mt-4">
          Where the processing of a child's personal data is identified and
          applicable law requires parental or guardian involvement, we will
          handle such information in accordance with applicable legal
          requirements.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes to our website, services, data-handling practices,
          third-party services or applicable requirements.
        </p>

        <p className="mt-4">
          When this policy is updated, the revised version and its
          &quot;Last Updated&quot; date will be published on this page.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-wok-black text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 flex flex-col items-center justify-center text-center">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[140px]" />

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="relative z-10 mx-auto max-w-[1360px] flex flex-col items-center justify-center text-center">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-2 font-body text-[10px] font-black uppercase tracking-[0.25em] text-primary sm:text-xs">
            Your Privacy Matters
          </span>

          <h1 className="mt-7 max-w-5xl font-display text-[clamp(3.4rem,8vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.055em]">
            PRIVACY
            <br />
            <span className="text-primary">POLICY.</span>
          </h1>

          <p className="mt-8 max-w-2xl font-body text-sm leading-7 text-white/55 sm:text-base">
            This Privacy Policy explains how Kuro Sizzlers handles personal
            information that you provide when using our website, including
            when making a reservation request or sending us an enquiry.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 font-body text-xs text-white/40">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Last Updated: 27 September 2026
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2">
              Kuro Sizzlers
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          POLICY
      ========================================================== */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT / STICKY */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="font-body text-xs font-black uppercase tracking-[0.2em] text-primary">
                Privacy at Kuro
              </p>

              <h2 className="mt-4 max-w-md font-display text-3xl font-black uppercase leading-[1] sm:text-4xl">
                CLEAR.
                <br />
                RESPONSIBLE.
                <br />
                <span className="text-primary">TRANSPARENT.</span>
              </h2>

              <p className="mt-6 max-w-sm font-body text-sm leading-7 text-white/50">
                We believe you should understand what information is
                collected when you contact us and why it is needed.
              </p>

              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/[0.06] p-5">
                <span className="material-symbols-outlined text-2xl text-primary">
                  lock
                </span>

                <p className="mt-3 font-display text-sm font-black uppercase">
                  Privacy Question?
                </p>

                <p className="mt-2 font-body text-xs leading-6 text-white/50">
                  Contact Kuro Sizzlers if you have a question about
                  information submitted through our website.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 font-body text-xs font-black uppercase tracking-wide text-primary transition hover:text-white"
                >
                  Contact Us
                  <span
                    className="material-symbols-outlined text-[16px]"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </aside>

          {/* RIGHT / CONTENT */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {sections.map((section) => (
                <article
                  key={section.number}
                  className="grid grid-cols-1 gap-4 py-9 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-10"
                >
                  <span className="font-display text-sm font-black text-primary">
                    {section.number}
                  </span>

                  <div>
                    <h2 className="font-display text-xl font-black uppercase tracking-tight sm:text-2xl">
                      {section.title}
                    </h2>

                    <div className="mt-4 max-w-3xl font-body text-sm leading-7 text-white/55 sm:text-[15px]">
                      {section.content}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* =====================================================
                CONTACT
            ====================================================== */}
            <div className="mt-12 rounded-2xl bg-primary p-6 text-wok-black sm:p-8 lg:p-10">
              <span className="font-body text-xs font-black uppercase tracking-[0.2em]">
                Privacy & Data Requests
              </span>

              <h2 className="mt-3 font-display text-3xl font-black uppercase leading-none sm:text-4xl">
                HAVE A PRIVACY
                <br />
                QUESTION?
              </h2>

              <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-wok-black/65">
                If you have a question or request concerning personal
                information that you submitted through the Kuro Sizzlers
                website, please contact us and provide enough information for
                us to understand and respond to your request.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-wok-black px-6 font-body text-xs font-black uppercase tracking-wide text-primary transition hover:bg-charcoal-night"
                >
                  Contact Kuro
                  <span
                    className="material-symbols-outlined text-[18px]"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>

                <a
                  href="tel:+918971685958"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-wok-black px-6 font-body text-xs font-black uppercase tracking-wide transition hover:bg-wok-black hover:text-primary"
                >
                  Call +91 89716 85958
                </a>
              </div>
            </div>

            {/* =====================================================
                DISCLAIMER
            ====================================================== */}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
              <p className="font-body text-xs leading-6 text-white/35">
                This policy describes the privacy practices associated with
                this website and may be updated as our website, services,
                technology providers or applicable requirements change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM
      ========================================================== */}
      <section className="border-t border-white/10 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1360px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-black uppercase">
              Kuro Sizzlers
            </p>

            <p className="mt-1 font-body text-xs text-white/40">
              Rajrajeshwari Nagar, Bengaluru, Karnataka
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-xs font-black uppercase tracking-wide text-primary transition hover:text-white"
          >
            Back to Home
            <span
              className="material-symbols-outlined text-[17px]"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}