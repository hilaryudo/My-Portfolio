import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.png";
import udohilaryimage from "../assets/udohilaryimage.jpeg";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <main className="bg-black">
        <section className="wrapper flex flex-col md:flex-row justify-between items-center ">
          <div className="w-[400px] md:w-[544px] h-[360px] p-5 mt-10">
            <h1 className="font-[BebasNeue] font-normal text-[54px] md:text-[78px] text-[#FFFFFF] leading-[90%]">
              HI, I AM HILARY UDO.
            </h1>
            <p className="font-[Manrope] font-normal text-[16px] md:text-[18px] text-[#C7C7C7] my-5">
              A Nigerian based front-end Developer passionate about building
              accessible and user friendly websites
            </p>

            <div className="flex items-center gap-4">
              <Link to="/contact">
              <h3 className="bg-[#D3E97A] px-6 py-5 rounded-[100px] text-[16px] text-[#0A0A0A] font-[Manrope] font-bold">
                CONTACT ME.
              </h3>
              </Link>
              
              <a href="https://github.com/hilaryudo">
                <div className="w-[54px] h-[54px] bg-[#222222] rounded-[100px]">
                  <img src={github} alt="github" className="p-3" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <img
              src={udohilaryimage}
              alt="hilary-image"
              className="h-[400px] w-[343px] md:h-[700px] md:w-[580px] rounded-2xl"
            />
          </div>
        </section>

        <section className="wrapper border-y border-[#484848] mt-10 ">
          <div className=" w-[400px] md:w-[600px] h-[170px] md:h-[138px] my-7">
            <h2 className="font-[BebasNeue] font-normal text-[50px] text-[#FFFFFF] leading-[98%]">
              FEATURED PROJECTS
            </h2>
            <p className="font-[Manrope] font-normal text-[18px] text-[#C7C7C7] mt-4">
              Here are some of the selected projects that showcase my passion
              for front-end Development.
            </p>
          </div>
          <div className="">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section className="wrapper md:hidden">
          <img
            src={udohilaryimage}
            alt="hilary image"
            className="w-[343px] h-[450px]"
          />
        </section>

        <section className="wrapper mt-10 mb-50 hidden md:block">
          <div className="flex justify-between items-center">
            <h1 className="pb-40 font-[BebasNeue] font-normal text-[100px] lg:text-[80px] text-[#FFFFFF]">
              ABOUT ME
            </h1>
            <div className="w-[704px] lg:w-[670px] font-[Manrope]">
              <h2 className="font-medium text-[#FFFFFF] text-[28px]">
                I am a front-end web Developer based in Nigeria, Has Applied
                Microbiology and Brewing background.
              </h2>
              <p className="font-normal text-[#C7C7C7] text-[18px] my-5">
                I am a front-end developer based in Nigeria looking for exciting
                opportunities. Has Applied Microbiology and Brewing background.
                Likes to focus on accessibility when developing. Passionate and
                curious about solving problems. Currently, I'm exploring
                Reactjs, Webflow and a bit of Designing. While I am not
                programming, I enjoy reading fictions and sourcing for good
                music. Learning more to improve skill.
              </p>
              <Link to="/about">
                <h3 className="w-[129px] border-b-2 border-[#D3E97A] font-[Manrope] font-bold text-[16px] text-[#D3E97A] my-7">
                  MORE ABOUT ME
                </h3>
              </Link>
            </div>
          </div>
        </section>

        <section className="wrapper mt-10 border-t border-[#484848]">
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default Home;
