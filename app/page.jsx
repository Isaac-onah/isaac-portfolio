import {Button} from "@/components/ui/button";
import Socials from "@/components/Social";
import {FiDownload} from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Work from "./work/page";
import Resume from "./resume/page";
import Services from "./services/page";
import Contact from "./contact/page";
import ScrollToTopButton from "@/components/ArrowToTop";


const Home = () => {
  return (
      <div>
      <section className="h-full">
        <div className="container mx-auto h-full pt-[190px]">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm <br/> <span className="text-accent">Isaac Onah</span>

              </h1>
                <p className="max-w-[500px] mb-9 text-white/80">
                  I craft seamless, high-performing mobile applications. I am proficieant in various programming languages and technologies blending innovation with user-focused design.
                </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button 
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"></FiDownload>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-acent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </div>
            {/*Photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>

      <section id="services">
      <Services />
      </section>

      <section id="resume">
      <Resume />
      </section>

      <section id="work">
      <Work />
      </section>

      <section id="contact">
      <Contact />
      </section>
      {/* Add ScrollToTopButton here */}
      <ScrollToTopButton />
    </div>
  
);
}

export default Home;