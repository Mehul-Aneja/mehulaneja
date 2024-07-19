import Head from 'next/head';
import { Inter } from '@next/font/google';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from "next/image";
import {useState} from 'react';
import { SocialIcon } from 'react-social-icons';
import Mehul from "/public/Mehul.jpg"
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })
const MouseParticles = dynamic(() => import('react-mouse-particles'), { ssr: false });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Mehul Aneja</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-gradient-to-b from-black to-blue-900 pb-10 md:px-20 lg:px-40 dark:bg-gradient-to-b dark:from-white dark:to-teal-500">
        <MouseParticles key={darkMode} g={1} color={darkMode ? ["#00FFFF", "#FFFFFF"] : "#0000FF"} cull="col,image-wrapper" level={6} />
        <section className="min-h-screen">

          <nav className="pt-8 flex justify-between">
            <div className="ml-3 transition ease-in-out delay-100 hover:scale-110"> <a className="bg-gradient-to-r from-cyan-500 to-teal-600 text-black px-4 py-2 rounded-md text-lg dark:text-white dark:from-black dark:to-black" href="https://drive.google.com/file/d/1JGsI_js11UJGpBuvtI92cQpkpH7OmUb_/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a> </div>
            <div className="mr-3"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-cyan-100 cursor-pointer text-3xl transition ease-in-out delay-100 hover:scale-110 dark:text-slate-900" /></div>
          </nav>

          <div className="text-center pt-12">
            <h2 className="text-6xl text-cyan-200 font-medium dark:text-black">Mehul Aneja</h2> 
            <h3 className="text-3xl pt-5 text-cyan-200 dark:text-slate-900">New York | mehulaneja123@gmail.com</h3>
            <h3 className="text-3xl pb-10 text-cyan-200 dark:text-slate-900">Bachelors in Computer Science & Mathematics @ New York University 2024</h3>
          </div>

          <div className="relative mx-auto rounded-full w-72 h-72 overflow-hidden">
            <Image className="-mt-10" src={Mehul} layout="" objectFit="cover" />
          </div>

          <div className="pt-10 text-5xl flex justify-center gap-20 pb-16 text-gray-600">
            <SocialIcon className="transition ease-in-out hover:-translate-y-1 hover:scale-110" style={{height: 75, width: 75}} url="https://www.linkedin.com/in/mehulaneja/" fgColor="white" target="_blank" />
            <SocialIcon className="transition ease-in-out hover:-translate-y-1 hover:scale-110" style={{height: 75, width: 75}} url="mailto: mehulaneja123@gmail.com" bgColor="white" fgColor="#DB4437" target="_blank" />
            <SocialIcon className="transition ease-in-out hover:-translate-y-1 hover:scale-110" style={{height: 75, width: 75}} url="https://github.com/mehul-aneja" bgColor="black" fgColor="white" target="_blank" />
          </div>

        </section>
        
      </main>
    </div>
    </>
  )
}
