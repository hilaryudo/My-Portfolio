import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Linkedin from "../assets/linkin.png";
import github from "../assets/github.png";
import twitterIcon from "../assets/twitterIcon.png";
import insta from "../assets/insta.png"

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        const serviceId = 'service_yc6lpyk';
        const templateId = 'template_esmbj5l';
        const publicKey = 'F6UEjgkvOqtOiBHKE';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Hilary',
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            setLoading(false);
            setSuccess('Message sent successfully!')
            console.log('Email sent successfully', response);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        })
        .catch((error) => {
            setLoading(false);
            setSuccess('failed to send message. Try again.')
            console.error('Error sending email', error)
        });
    }


  return (
    <div className='md:flex justify-between items-center'>
        <div className='w-[343px] md:w-[600px]'>
            <h1 className='font-[BebasNeue] font-normal text-[40px] md:text-[76px] lg:text-[60px]  text-[#FFFFFF]'>LET'S CONNECT</h1>
            <p className='font-[Manrope] font-normal text-[#C7C7C7] text-[14px] md:text-[18px]'>Say Hello at <a href="mailto:hilaryudo9@gmail.com" className='border-b border-[#D3E97A]'> hilaryudo9@gmail.com</a></p>
            <p className='font-[Manrope] font-normal text-[#C7C7C7] text-[14px] md:text-[18px] mt-2'>For more info, here's my <a href="/" className='border-b border-[#D3E97A]'>resume</a></p>
            <div className='flex items-center gap-8 md:gap-6 md:mb-[370px] mb-4 mt-8'>
                <img src={Linkedin} alt="linkin icon" />
                <img src={github} alt="github icon" />
                <img src={twitterIcon} alt="twitter icon" />
                <img src={insta} alt="instagram icon" />
            </div>
            <p className='hidden md:block font-[Manrope] font-medium text-[#C7C7C7] text-[16px]'>@ 2025 Hilary Udo</p>
        </div>
        <div className='w-[343px] md:w-[600px] mt-10'>
            <form onSubmit={handleSubmit} >
                <label className='h-[85px]'> <span className='block text-[16px] text-[#C7C7C7] font-medium font-[Manrope] mb-3'>Name</span>
                    <input name="name" value={name} onChange={(e) => setName(e.target.value)} required
                    className='w-[350px] md:w-[600px] h-[51px] bg-[#1A1A1A] rounded-sm px-4 py-3 text-[18px] text-[#FFFFFF] font-normal font-[Manrope] mb-5'/>
                </label>

                <label> <span className='block text-[16px] text-[#C7C7C7] font-medium font-[Manrope] mb-3'>Email</span>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className='w-[350px] md:w-[600px] h-[51px] bg-[#1A1A1A] rounded-sm px-4 py-3 text-[18px] text-[#FFFFFF] font-normal font-[Manrope] mb-5'/>
                </label>

                <label> <span className='block text-[16px] text-[#C7C7C7] font-medium font-[Manrope] mb-3'>Subject</span>
                    <input name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}
                    className='w-[350px] md:w-[600px] h-[51px] bg-[#1A1A1A] rounded-sm px-4 py-3 text-[18px] text-[#FFFFFF] font-normal font-[Manrope] mb-5'/>
                </label>

                <label> <span className='block text-[16px] text-[#C7C7C7] font-medium font-[Manrope] mb-3'>Message</span>
                    <textarea name="message" value={message} rows="6" onChange={(e) => setMessage(e.target.value)} required
                        className='w-[350px] md:w-[600px] h-[190px] bg-[#1A1A1A] rounded-sm px-4 py-3 text-[18px] text-[#FFFFFF] font-normal font-[Manrope] mb-5'></textarea>
                </label>

                <button type='submit' disabled={loading} 
                className='w-[140px] h-[54px] bg-[#D3E97A] px-10 py-4 rounded-[100px] text-[#0A0A0A] font-bold font-[Manrope] text-[16px] mt-3 mb-12'> 
                {loading ? "sending..." : "Submit"} </button>
                {success && <p className='text-center mt-4'>{success}</p>}

                <p  className='md:hidden block font-[Manrope] font-medium text-[#C7C7C7] text-[16px] mt-15'>@ 2025 Hilary Udo</p>
            </form>
        </div>
    </div>
  )
}

export default ContactForm