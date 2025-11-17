import Hero from "@/components/hero";
import Agenda from "@/components/agenda";
import SignupForm from "@/components/signup-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Agenda />
      <SignupForm />
      <Footer />
    </main>
  );
}
