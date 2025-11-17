import Hero from "@/components/hero";
import Agenda from "@/components/agenda";
import SignupForm from "@/components/signup-form";
import Footer from "@/components/footer";
import Jury from "@/components/jury";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="w-full">
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="agenda">
        <Agenda />
      </section>

      <section id="jury">
        <Jury />
      </section>

      <section id="signup-section">
        <SignupForm />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
