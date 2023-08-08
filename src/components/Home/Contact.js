import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// import { FaPhoneSlash, FaContactCard } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall}  from 'react-icons/bi'

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await emailjs.sendForm(
                'service_2su5tud',   // Replace with your actual Service ID from EmailJS
                'template_1tsr6yi',  // Replace with your actual Template ID from EmailJS
                e.target,
                '-dVyjtEKG8_SD2U42'       // Replace with your actual User ID from EmailJS
            );

            if (response.status === 200) {
                setFormStatus('success');
                console.log('SUCCESS!', response.status, response.text)
            } else {
                setFormStatus('error');
                console.log('FAILED...', response.status, response.text)
            }
        } catch (error) {
            setFormStatus('error');
            console.log(error)
        }
    };
    return (
        <div className='w-[90%] h-screen bg-gray-950 text-white flex sm:flex-col lg:flex-row'>
            <div className='lg:w-[50%] px-10 py-5 sm:mt-10 md:mt-0 sm:text-center sm:items-center flex flex-col justify-center gap-16'>
                <p className='text-7xl'>Let`s Discuss Together</p>
                <div className='flex lg:flex-col gap-10' >
                    <div className='flex flex-row gap-5 items-center'>
                        <AiOutlineMail className='text-4xl font-bold text-yellow-500 hover:text-yellow-100' />
                        <a className='text-4xl font-bold text-yellow-500 hover:text-yellow-100' href='tel:+6281234567890'>Call Me</a>
                    </div>
                    <div className='flex flex-row gap-5 items-center'>
                        <BiPhoneCall className='text-4xl font-bold text-yellow-500 hover:text-yellow-100' />
                        <a className='text-4xl font-bold text-yellow-500 hover:text-yellow-100' href='mailto:satyam.12011172@gmail.com'> Mail Me</a>
                    </div>
                </div>


            </div>
            <form className='flex mb-10 lg:w-[40%] justify-center p-10 flex-col gap-5' onSubmit={handleFormSubmit}>
                <div className='flex flex-col gap-5'>
                    <input type='text' placeholder='Name' name='user_name' id='name' className='bg-gray-900 p-5 rounded rounded-xl font-bold text-xl' />
                </div>
                <div className='flex flex-col gap-5'>
                    <input type='email' name='email' placeholder='Email' id='email' className='bg-gray-900 p-5 rounded rounded-xl font-bold text-xl' />
                </div>
                <div className='flex flex-col gap-5'>
                    <textarea name='message' id='message' placeholder='Type your message here!' className='bg-gray-900 p-5 rounded rounded-xl font-bold text-xl h-[200px] min-h-[150px] max-h-[250px]' cols='30' rows='10'></textarea>
                </div>
                <div className='flex flex-col gap-5'>
                    <button type='submit' className='bg-gray-900 hover:bg-yellow-500 text-white py-2 px-5 rounded-md'>
                        Send
                    </button>
                </div>
                {formStatus === 'success' && <p className='text-green-500'>Message sent successfully!</p>}
                {formStatus === 'error' && <p className='text-red-500'>An error occurred. Please try again later.</p>}
            </form>
        </div>
    )
}

export default Contact
