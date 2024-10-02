import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/portfolio";
import Hackathons from "@/components/contact";
import Contact from "@/components/getintouch";
export default function Home() {
  return (<>
<Hero/>
<About/>
<Portfolio/>
<Hackathons/>
<Contact/>
</> );
}
