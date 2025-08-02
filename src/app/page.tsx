import Image from "next/image";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import EducationSection from "@/components/education";
import Portfolio from "@/components/portfolio";
import Hackathons from "@/components/contact";
import ExperienceSnapScroll from "@/components/Experience";
import Contact from "@/components/getintouch";
export default function Home() {
  return (<>
<Hero/>
<AboutMe/>
<EducationSection/>
<Portfolio/>
<Hackathons/>
<ExperienceSnapScroll/>
<Contact/>
</> );
}
