import Navbar from "./layouts/Navbar";
import HeroSection from "./mainPage/components/HeroSection";
import NextBlock from "./mainPage/components/NextBlock";
import PizzaBlock from "./mainPage/components/PizzaBlock";



export default function Home() {
  return (
    <main className="">
      <HeroSection title="Hello world"/>
      <Navbar/>
      <NextBlock/>
      <PizzaBlock/>
    </main>
  );
}
