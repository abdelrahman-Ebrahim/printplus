import Hero from "@/components/HomeComponents/Hero";
import NavItems from "@/components/HomeComponents/NavItems";
import Popular from "@/components/HomeComponents/Popular";
import Services from "@/components/HomeComponents/Services";

export default function Home() {
  return (
    <>
      <NavItems />
      <Hero />
      <Services />
      <Popular />
    </>
  );
}
