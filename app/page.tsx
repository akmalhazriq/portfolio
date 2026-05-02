import AboutMe from "@/components/main/AboutMe";
import Hero from "@/components/main/Hero";
import Showcase from "@/components/main/Showcase";

export default function Home() {
  return (
    <main className="h-full w-full overflow-hidden">
      <div className="flex flex-col gap-20 overflow-hidden">
        <Hero />
        <div className="pb-20"> 
          <Showcase />
        </div>
        <AboutMe />
      </div>
    </main>
  );
}
