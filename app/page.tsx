import Navbar from "./layouts/Navbar";
import HeroSection from "./mainPage/components/HeroSection";



export default function Home() {
  return (
    <main className="">
      <HeroSection title="Hello world"/>
      <Navbar/>
    </main>
  );
}
