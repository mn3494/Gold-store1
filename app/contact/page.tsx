import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های ارتباطی با زرین اطلس؛ تلفن، واتساپ، تلگرام، اینستاگرام و آدرس نمایشگاه.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  );
}
