import React from 'react';
import linkedin from '../assets/linkin.png';
import github from '../assets/github.png';
import hills from '../assets/Hilaree.jpg';
import ContactForm from '../components/ContactForm';

const About = () => {
  return (
    <div>
      <main className='bg-black '>
        <section className='wrapper md:flex justify-between items-center gap-20'>
          <h1 className='font-[BebasNeue] font-normal text-[60px] md:text-[100px] lg:text-[68px] lg:pb-60 text-[#FFFFFF] mb-3'>ABOUT ME</h1>
          <div className='md:w-[704px] font-[Manrope]'>
            <h2 className='font-medium text-[#FFFFFF] text-[24px] md:text-[28px]'>I am a front-end Developer based in Nigeria, Has Applied Microbiology and Brewing background.</h2>
            <p className='font-normal text-[#C7C7C7] text-[16px] md:text-[18px] my-5'>I am a front-end developer based in Nigeria looking for exciting opportunities. Has Applied Microbiology and Brewing background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy reading fictions and sourcing for good music. Learning more to improve skill.</p>
            <div className='flex items-center gap-4 mb-12 mt-9'>
              <p className='bg-[#D3E97A] px-6 py-5 rounded-[100px] text-[16px] text-[#0A0A0A] font-[Manrope] font-bold'>DOWNLOAD RESUME .</p>
              <div className='w-[54px] h-[54px] bg-[#222222] rounded-[100px]'>
                <img src={linkedin} alt="linkedin" className='p-3' />
              </div>
              <div className='w-[54px] h-[54px] bg-[#222222] rounded-[100px]'>
                <img src={github} alt="github" className='p-3' />
              </div>
            </div>
          </div>
        </section>

        <section className=' md:w-[1440px] lg:w-[1180px] mx-auto bg-[#C7C7C7] md:rounded-2xl rounded-lg'>
          <img src={hills} alt="hills image" className='md:w-[550px] md:h-[650px] mx-auto w-[330px] h-[330px]' />
        </section>

        <section className=' wrapper md:flex justify-between items-center gap-20 border-b border-[#484848] mt-10 md:mt-0'>
          <h1 className='font-[BebasNeue] font-normal text-[40px] md:text-[76px] lg:text-[50px] lg:mb-40 text-[#FFFFFF]'>MY CAPABILITIES</h1>
          <div className='w-[350px] md:w-[600px] md:mt-15 mt-4 font-[Manrope] '>
            <p className='font-normal text-[18px] text-[#C7C7C7]'>I develop full-stack web solutions with clean design and solid backend logic. I pay attention to user experience and i'm constantly learning and adding new technologies to my toolbox.</p>
            <div className='flex flex-wrap gap-3 my-8'>
              {[
                'HTML', 'CSS', 'JAVASRCIPT', 'JQUERY', 'ACCESSIBILITY', 'FIGMA', 'TAILWIND CSS',
              ].map((skill, index) => (
                <span key={index} className='px-6 py-2 mt-3 border border-[#484848] text-[#FFFFFF] font-bold text-[16px] rounded-[100px] hover:bg-[#D3E97A] hover:text-[#0A0A0A]'>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className=' wrapper md:flex justify-between  gap-20 border-b border-[#484848] mt-5'>
          <h1 className='font-[BebasNeue] font-normal text-[40px] md:text-[76px] lg:text-[55px] text-[#FFFFFF] mb-10 md:mb-0'>MY EXPERIENCE</h1>
          <div>
            <div className='w-[350px] md:w-[600px]'>
              <div className='flex justify-between items-center mb-5'>
                <h4 className='font-medium font-[Manrope] text-[#FFFFFF] text-[18px] md:text-[24px]'>Freelance Developer</h4>
                <p className='font-normal text-[14px] md:text-[18px] text-[#C7C7C7] font-[Manrope]'>May 2025 - Present</p>
              </div>
              <p className='font-normal text-[16px] md:text-[18px] text-[#C7C7C7] font-[Manrope] mb-12'>I've worked as a freelance developer, helping clients build websites and web apps that match their goals. It's given me real practice in solving problems, meeting deadlines and turning ideas into working products.</p>
            </div>

            <div className='w-[350px] md:w-[600px] mb-10 md:mb-15'>
              <div className='flex justify-between items-center'>
                <h4 className='font-medium font-[Manrope] text-[#FFFFFF] text-[18px] md:text-[24px] mb-2'>Front-End Intern</h4>
                <p className='font-normal text-[14px] md:text-[18px] text-[#C7C7C7]'>Nov 2025 - Present</p>
              </div>
              <p className='font-semibold text-[14px] md:text-[18px] text-[#D3E97A] font-[Manrope] mb-5'>Techstudio Academy</p>
              <p className='font-normal text-[16px] md:text-[18px] text-[#C7C7C7] font-[Manrope]'>I interned as a frontend developer at TechStudio Academy where I worked on real UI tasks, improved my React skills and learned how to bring designs to life in a clean, responsive way. It was a solid learning experience that helped me grow as a developer.</p>
            </div>
          </div>
        </section>

        <section className='wrapper'>
         <ContactForm />
        </section>
      </main>
    </div>
  )
}

export default About