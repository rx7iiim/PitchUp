import Hero from "@/components/hero";
import Agenda from "@/components/agenda";
import SignupForm from "@/components/signup-form";
import Footer from "@/components/footer";
import Jury from "@/components/jury";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Agenda />
      <Jury />
      <SignupForm />
      <Footer />
    </main>
  );
}
