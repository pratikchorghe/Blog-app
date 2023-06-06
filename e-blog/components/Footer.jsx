import React from 'react'
import { FooterPosts } from '../sections/index';


const Footer = () => {
  return (
      <footer className=" text-white bg-white">
        <div className="p-6">
            <FooterPosts />
        </div>

        <div className=" text-lg text-black font-semibold border-b pb-4 text-center p-4 bg-slate-100">
        
            <a className="text-xl text-black mb-8 font-semibold border-b pb-4" href="https://gauravjangam.dev/" target="_blank"> </a>
        </div>
    </footer>
  )
}

export default Footer