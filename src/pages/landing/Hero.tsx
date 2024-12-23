import React from 'react'
import { Link, useNavigate } from "react-router";
import { HERO } from '../../constants/constant'

const Hero = () => {
  return (
    <div className='px-4 lg:px-48'>
        <div className='gap-10 flex flex-row-reverse justify-center items-center'>
            <div className='hover:scale-105 duration-300'>
                <img src="/src/assets/hero.png" alt="hero" />
            </div>
            <div className='w-96 flex flex-col gap-5 '>
                <h1 className='text-3xl font-bold hover:scale-110 duration-300'>{HERO.title}</h1>
                <p className='text-sm hover:scale-110 duration-300'>{HERO.description}</p>
                <h3 >{HERO.hook}</h3>
                <Link to={'/register/student'}  className='py-2 hover:animate-pulse rounded-xl text-center border-2 border-black bg-yellow-400 hover:bg-black duration-300 hover:scale-110 hover:text-white '>
                    <button>
                        Daftar Sekarang!
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero