interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalLayoutProps {
  title: string;
  intro: string;
  sections: LegalSection[];
  updatedAt: string;
}

export default function LegalLayout({ title, intro, sections, updatedAt }: LegalLayoutProps) {
  return (
    <main className="pt-32">
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">اسناد رسمی</span>
          <h1 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">{title}</h1>
          <p className="mt-2 text-xs text-muted">آخرین به‌روزرسانی: {updatedAt}</p>
          <div className="mt-6 h-px w-24 bg-gold-gradient" />
          <p className="mt-8 text-base leading-8 text-bone">{intro}</p>

          <div className="mt-10 flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl text-ivory">{section.heading}</h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-7 text-bone">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
