import Carts from "../components/Carts";
import Hero from "../components/Hero";
import BlinkingText from "../components/BlinkingText";
import HomeAbout from "../components/HomeAbout";
import TrustSection from "../components/TrustSection";
import GrantsSection from "../components/GrantsSection";


export default function Home() {
  return (
    <>
      <div className="mt-10 py-10 px-10 text-center">
        <Hero />
      </div>
      <div className="mt-10 py-10 px-10 text-center">
        <Carts />
      </div>
      <div><BlinkingText/></div>
      <div><HomeAbout/></div>
      <div><TrustSection/></div>
      <div><GrantsSection/></div>
      
    </>
  );
}
