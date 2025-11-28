import React from 'react';
import arrowIcon from "../assets/arrowIcon.png";
import github from "../assets/github.png";


const ProjectCard = ({ project }) => {
  return (
    <div className='w-full rounded-xl py-10 flex flex-col md:flex-row justify-between gap-20'>
       <div className='w-[343px] h-[343px] md:w-[600px] md:h-[600px] bg-[#1A1A1A] md:px-10 md:py-20 px-5 py-1'>
        {project.badge && (
            <p className='mb-5 inline-block px-4 py-2 bg-[#0A0A0A] rounded-[100px] font-[Manrope] text-[12px] md:text-[14px] text-[#FFFFFF] font-medium '>{project.badge}</p>
         )}
         <img src={project.image} alt={project.title} className='w-[300px] md:w-[486px] md:h-[347px] h-[250px] rounded-xl object-cover border-2 border-[#000000] ' />
       </div>

       <div className='w-[358px] md:w-xl h-[480px] my-auto'>
        <h3 className='font-[Manrope] font-medium text-[28px] md:text-[32px] text-[#FFFFFF]'>{project.title}</h3>
        <p className='font-[Manrope] font-normal text-[18px] text-[#C7C7C7] my-6'>{project.description}</p>
        <div>
            <h3 className='font-[Manrope] font-semibold text-[16px] text-[#FFFFFF] my-4'>PROJECT INFO</h3>
            <div className='flex justify-between border-t border-[#484848] py-4'>
                <p className='font-[Manrope] font-medium text-[16px] text-[#FFFFFF]'>Year</p>
                <p className='font-[Manrope] font-medium text-[16px] text-[#C7C7C7]'>{project.year}</p>
            </div>
            <div className='flex justify-between border-y border-[#484848] py-4'>
                <p className='font-[Manrope] font-medium text-[16px] text-[#FFFFFF]'>Role</p>
                <p className='font-[Manrope] font-medium text-[16px] text-[#C7C7C7]'>{project.role}</p>
            </div>
        </div>

        <div className='mt-8 flex items-center gap-4'>
          <a href={project.live} target='_blank' className='flex items-center gap-1 border-b border-[#D3E97A] text-[#D3E97A] font-[Manrope] font-bold text-[16px] hover:text-[20px]'>
            LIVE DEMO
            <img src={arrowIcon} alt="arrowicon" className='w-6 h-6' />
          </a>
          <a href={project.github} target='_blank' className='flex items-center gap-1 border-b border-[#D3E97A] text-[#D3E97A] font-[Manrope] font-bold text-[16px] hover:text-[20px]'>
            SEE ON GITHUB
            <img src={github} alt="github" className='w-6 h-6' />
          </a>
        </div>
       </div>
    </div>
  )
}

export default ProjectCard