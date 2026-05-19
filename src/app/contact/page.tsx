import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero - Light Orange Tint Section */}
      <div className="mx-2 bg-[#FDF0EB] rounded-[12px]">
        <div className="text-center pt-[180px] pb-[80px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1F]">
            Let&apos;s build together
          </h1>
        </div>
      </div>

      {/* Iframe on light bg */}
      <section className="bg-[#FAFAFA] px-4 py-12">
        <div className="max-w-[1140px] mx-auto">
          <iframe
            src="https://form.jotform.com/260671522082149"
            title="Contact Form"
            className="w-full border-0"
            style={{
              minHeight: 800,
              borderRadius: 12,
            }}
            allowFullScreen
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
