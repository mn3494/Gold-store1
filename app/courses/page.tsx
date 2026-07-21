import type { Metadata } from "next";
import { GraduationCap, Clock, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "دوره‌های آموزش طلاسازی و طلافروشی",
  description: "دوره‌های عملی طلاسازی، سنگ‌نشانی و مدیریت کسب‌وکار طلافروشی در کارگاه زرین اطلس.",
};

export default function CoursesPage() {
  return (
    <main className="pt-32">
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="آموزش"
            title="دوره‌های آموزش طلاسازی و طلافروشی"
            description="یاد گرفتن این حرفه فقط با تماشا ممکن نیست؛ دوره‌های ما عملی، در کنار استادکاران واقعی و روی میز کار واقعی برگزار می‌شود."
          />

          <div className="mt-16 flex flex-col gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-gold-600/10 bg-charcoal sm:grid-cols-5"
              >
                <div className="relative aspect-video sm:col-span-2 sm:aspect-auto">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:col-span-3">
                  <h3 className="font-display text-xl text-ivory">{course.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-bone">{course.description}</p>
                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <BarChart3 className="h-3.5 w-3.5 text-gold-400" />
                      {course.level}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold-400" />
                      {course.duration}
                    </span>
                  </div>
                  <a href="/contact" className="btn-outline-gold mt-6 w-fit">
                    <GraduationCap className="h-4 w-4" />
                    درخواست مشاوره ثبت‌نام
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-gold-600/15 bg-obsidian-500/40 p-8 text-sm leading-7 text-muted">
            <p>
              گواهی پایان دوره توسط خود کارگاه زرین اطلس صادر می‌شود و بر اساس ساعت آموزش عملی است.
              برای اطلاع از شرایط دریافت مدرک فنی و حرفه‌ای رسمی، لطفاً پیش از ثبت‌نام با کارشناسان ما در بخش{" "}
              <a href="/contact" className="text-gold-400 hover:underline">
                تماس با ما
              </a>{" "}
              هماهنگ کنید.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
