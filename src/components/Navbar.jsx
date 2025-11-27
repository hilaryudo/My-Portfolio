import React from 'react'
import { Link } from 'react-router-dom'
import menuImage from "../assets/menuImage.png"

const Navbar = () => {
  return (
    <div>
        <nav className='sticky top-0 bg-black shadow-sm'>
            <div className='max-w-[1440px] h-24 mx-auto px-6 py-4 flex justify-between items-center'>
                <h1 className='font-[BebasNeue] font-normal text-[32px] text-[#C7C7C7] tracking-[-1%]'>HILARY UDO</h1>

                <div className='hidden md:flex gap-6 font-[Inter] font-medium text-[16px] text-[#C7C7C7]'>
                    <Link to= "/">
                    <p>Work</p>
                    </Link>
                    <Link to= "/about">
                    <p>About</p>
                    </Link>
                    <Link to= "/">
                    <p>Contact</p>
                    </Link>
                </div>

                <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn m-5 bg-black rounded-lg ">
                        <img src={menuImage} alt="menuIcon" />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className='font-[Inter] font-medium text-[16px] text-[#C7C7C7]'>
                            <Link to="/">
                                Work
                            </Link>
                        </li>
                        <li className='font-[Inter] font-medium text-[16px] text-[#C7C7C7]'>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li className='font-[Inter] font-medium text-[16px] text-[#C7C7C7]'>
                            <Link to="/">
                                Conatct
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar