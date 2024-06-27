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

      <section className="px-[10%]">
        <h1 className="w-full text-[25px] mb-4">O que é o Plus Japan?</h1>
        <p className="w-full text-[18px] mb-4">O Plus Japan é um aplicativo inovador, desenvolvido especialmente para falantes de português do Brasil,  que oferece uma abordagem completa e interativa para o aprendizado japonês.</p>
        <p className="w-full text-[18px] mb-4">Seja você um iniciante ou alguém que deseja aprimorar seus conhecimentos, nosso app tem tudo o que você precisa para progredir com confiança.</p>

        <div className="flex gap-x-5 w-full">
          <div className="flex flex-col items-center gap-y-2 bg-blue-400 rounded-lg p-7">
            <Image src="/assets/images/hospital--Streamline-Emoji.png" alt="" width={50} height={40} className="mb-4"/>
            <h1 className="text-[28px] text-white font-bold">Termos médicos</h1>
            <p className="text-[18px] text-white text-center">Aprenda vocabulário específico da área médica, ideal para profissionais de saúde ou estudantes que planejam trabalhar ou estudar no Japão</p>
          </div>

          <div className="flex flex-col items-center gap-y-2 bg-blue-500 rounded-lg p-7">
            <Image src="/assets/images/open-book--Streamline-Emoji.png" alt="" width={50} height={40} className="mb-4" />
            <h1 className="text-[28px] text-white font-bold">Termos médicos</h1>
            <p className="text-[18px] text-white text-center">Aprenda vocabulário específico da área médica, ideal para profissionais de saúde ou estudantes que planejam trabalhar ou estudar no Japão</p>
          </div>

          <div className="flex flex-col items-center gap-y-2 bg-blue-400 rounded-lg p-7">
            <Image src="/assets/images/Group.png" alt="" width={50} height={40} className="mb-4" />
            <h1 className="text-[28px] text-white font-bold">Termos médicos</h1>
            <p className="text-[18px] text-white text-center">Aprenda vocabulário específico da área médica, ideal para profissionais de saúde ou estudantes que planejam trabalhar ou estudar no Japão</p>
          </div>
        </div>
      </section>

      <section className="px-[10%] my-[80px]">
        <h1 className="w-full text-[25px] mb-[30px]">Por que escolher a Plus Japan?</h1>
        <div className="flex w-full rounded-lg">
          <div className="flex items-center justify-center py-[30px] w-[50%] bg-blue-200">
            <Image src="/assets/images/Open Doodles Reading.png" alt="" width={380} height={40} />
          </div>

          <div className="flex flex-col items-center justify-center w-[50%] bg-gray-100 px-[30px]">
            <div className="flex w-full items-center gap-x-2">
              <Image src="/assets/images/brazil--Streamline-Emoji.png" alt="" width={30} height={40} />
              <h3 className="font-bold text-gray-700">Focado em brasileiros</h3>
            </div>

            <p>Todo o conteúdo é elaborado considerando as necessidades e desafios dos falantes de português do Brasil</p>

            <div className="flex w-full items-center gap-x-2 mt-[20px]">
              <Image src="/assets/images/rocket--Streamline-Emoji.png" alt="" width={30} height={40} />
              <h3 className="font-bold text-gray-700">Atualizações regulares</h3>
            </div>

            <p>Todo o conteúdo é elaborado considerando as necessidades e desafios dos falantes de português do Brasil</p>

            <button className="bg-blue-500 mt-[25px] py-[12px] text-white w-full rounded-lg">Baixar o + Japan</button>
          </div>
        </div>
      </section>

      <section className="px-[10%] my-[80px]">
        <h1 className="w-full text-[25px] mb-[30px]">Quem pode se beneficiar do Plus Japan?</h1>

        <div className="w-full mt-[100px]">
          <div className="flex items-center gap-x-2 w-full rounded-xl px-5 py-[40px] relative bg-gray-200">
            <div className="w-[150px] px-[20px]">
              <Image src="/assets/images/grinning-face--Streamline-Emoji.png" alt="" width={80} height={40} />
            </div>

            <div>
              <p className="text-gray-700 text-[18px]">
                O plus Japan é ideal para qualquer pessoa interessada em <span className="font-bold">aprender japonês</span>, independentemente da idade ou nível de conhecimento. 
                Se você quer se preparar para uma viagem, melhorar sua habilidades para o trabalho, ou simplismente explorar uma nova cultura, 
                nosso aplicativo é a ferramenta perfeita para você.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full mt-[80px] bg-blue-500 rounded-xl py-[40px] items-center">
          <div className="flex flex-col gap-y-2 w-full px-5">
            <div className="w-full">
              <Image src="/assets/images/smiling-face-with-sunglasses--Streamline-Emoji.png" alt="" width={40} height={40} />
            </div>
            
            <h3 className="font-bold text-white">Comece a aprender hoje mesmo!</h3>
            <p className="text-white text-[20px]">
              Não perca mais tempo e dê o primeiro passo para se tornar fluente em japonês. Baixe o <span className="font-bold">Plus Japan</span> agora e transforme seu aprendizado!
            </p>
          </div>

          <div className="relative w-[300px] h-full ">
            <Image src="/assets/images/cellphone2.png" alt="" width={120} height={100} className="absolute z-10 top-[0px]" />
          </div>

          <div>
            <h2 className="text-white font-bold text-[20px]">Disponível para download na App Store e Google Play.</h2>

            <div className="flex gap-x-3 w-full justify-center">
              <Image src="/assets/images/apple-sotre.png" alt="" width={120} height={40} />
              <Image src="/assets/images/google-play.png" alt="" width={120} height={40} />
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full px-[10%] bg-blue-800">
        <div className="w-full py-[80px]">
          <div className="w-full mb-[55px]">
            <div className="flex gap-x-4">
              <Image src="/assets/images/tanoki-head.png" alt="" width={50} height={50} />
              <span className="font-bold text-[30px] text-white">+Japan</span>
            </div>
          </div>

          <div className="w-full flex items-start gap-x-[80px]">
            <ul className="flex flex-col gap-y-5 max-w-[450px]">
              <li className="flex flex-col gap-y-2">
                <h2 className="flex items-center gap-x-2 text-white text-[17px]">
                  <Image src="/assets/images/ri_whatsapp-fill.png" alt="" width={25} height={40} />
                  <span>WhatsApp</span>
                </h2>
                <p className="text-white">Envie-nos uma mensagem no Whatsapp para obter suporte rápido e eficiente: <span className="text-yellow-300 font-bold">+55 (XX) XXXX - XXXX</span></p>
              </li>

              <li>
                <h2 className="flex items-center gap-x-2 text-white text-[17px]">
                  <Image src="/assets/images/Facebook.png" alt="" width={25} height={40} />
                  <span>Messenger</span>
                </h2>
                <p className="text-white">Envie-nos uma mensagem no Whatsapp para obter suporte rápido e eficiente: +55 (XX) XXXX - XXXX</p>
              </li>

              <li>
                <h2 className="flex items-center gap-x-2 text-white text-[17px]">
                  <Image src="/assets/images/Instagram.png" alt="" width={25} height={40} />
                  <span>Instagram</span>
                </h2>
                <p className="text-white">Envie-nos uma mensagem no Whatsapp para obter suporte rápido e eficiente: +55 (XX) XXXX - XXXX</p>
              </li>
            </ul>

            <div className="flex flex-col gap-y-2 bg-white px-[25px] py-[25px] rounded-lg w-[480px] relative">
              <Image src="/assets/images/smiling-face-with-smiling-eyes--Streamline-Emoji.png" alt="" width={50} height={50} />
              <Image src="/assets/images/Open Doodles Selfie.png" alt="" width={200} height={50} className="absolute right-[-180px] top-[-20px] -z-0" />
              <h3>Estamos a disposição</h3>
              <p>Seja qual for sua dúvida ou necessidade, nossa equipe está pronta para ajudar. Entre em contato por qualquer um dos canais acima e responderemos o mais rápido possível.</p>
            </div>
          </div>
        </div>  
      </footer>

      <div className="w-full py-[25px] px-[10%] bg-blue-900">
        <span className="text-white text-[16px]">
          Plus Japan - @ 2024 - All rights reserved
        </span>
      </div>
    </>
  )
}
