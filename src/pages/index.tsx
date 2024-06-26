import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Home() {
  
  return (
    <>
      <nav className="flex w-full justify-between fixed top-[0px] left-[0px] z-10 px-[10%] py-[20px] nav">
        <div className="flex gap-x-4">
          <Image src="/assets/images/tanoki-head.png" alt="" width={50} height={50} />
          <span className="font-bold text-[30px] text-white">+Japan</span>
        </div>

        <div className="flex items-center nav-links">
          <Link href="#">O Curso</Link>
          <Link href="#">Sobre nós</Link>
          <Link href="#">Outras ferramentas</Link>
          <Link href="#">Contato</Link>
          <Link href="#">Login</Link>
        </div>
      </nav>
      <header className="w-full header relative z-0 py-[120px]">
        <Image src="/assets/images/Vector3.png" className="absolute top-[350px] left-0" alt="" width={50} height={50} />
        <Image src="/assets/images/Vector2.png" className="absolute bottom-[50px] right-0" alt="" width={50} height={50} />

        <div className="flex w-full px-[10%] gap-x-4 items-center justify-between py-9">
          <div className="">
            <p className="text-[35px] text-white">Seu App para <span className="text-yellow-300">aprender</span><br/>Japonês e e muito mais, baixe<br/>agora mesmo</p>
            <button className="mt-5 bg-white rounded-xl px-5 py-3" style={{color: "#054c8e"}}>Baixe o app</button>
          </div>

          <div className="flex w-[50%] justify-center relative">
            <Image src="/assets/images/Vector.png" alt="" width={380} height={300} className="absolute -z-10" />
            <Image src="/assets/images/cellphone.png" alt="" width={220} height={300} className="" />
          </div>
        </div>

        <div className="w-full px-[10%] mt-[100px]">
          <div className="flex gap-x-2 w-full rounded-xl p-5 relative box-header-welcome">
            <Image src="/assets/images/tanoki.png" alt="" width={90} height={80} className="absolute top-[-90px] right-[10px]" />

            <div className="w-[25px]">
              <Image src="/assets/images/grinning-face--Streamline-Emoji.png" alt="" width={80} height={40} />
            </div>

            <div>
              <h1 className="font-bold text-white text-[20px]">Bem-vindo ao Plus Japan</h1>
              <p className="text-white text-[20px]">Descubra a maneira mais eficiente de aprender Japônes com o <span className="text-yellow-300">Plus Japan</span>, o aplicativo perfeito para brasileiros que desejam dominar a língua japonesa!</p>
            </div>
          </div>
        </div>
      </header>
      <div className="transform rotate-180">
      <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
  <path fill="#054c8e" fill-opacity="1" d="M0,320 Q720,0 1440,320 L0,320 Z"></path>
</svg>



      </div>






      
    </>
  )
}
