import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from "next/image";
import { useState, useEffect, useMemo } from 'react';
import { SocialIcon } from 'react-social-icons';
import Mehul from "/public/Mehul.jpg"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadTrianglesPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesBackgroundOptions = useMemo( () => ({ preset: "triangles", }), [], );

  return (
    <>
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Mehul Aneja</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="pb-10 md:px-20 lg:px-40 dark:bg-gradient-to-b dark:from-white dark:via-purple-500 dark:to-purple-900">
        {init && !darkMode && ( <div className="absolute top-0 left-0 w-full h-full -z-10"> <Particles options={particlesBackgroundOptions} /> </div> )}
        <section className="min-h-screen">

          <nav className="pt-8 flex justify-between">
            <div className="ml-3 transition ease-in-out delay-10 hover:scale-110"> <a className="rounded-full border bg-gradient-to-r from-purple-500 to-teal-600 text-black px-4 py-2 rounded-md text-lg dark:text-white dark:from-black dark:to-black" href="https://drive.google.com/file/d/1JGsI_js11UJGpBuvtI92cQpkpH7OmUb_/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a> </div>
            <div className="mr-3"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-purple-500 cursor-pointer text-3xl transition ease-in-out delay-50 hover:scale-110 dark:text-slate-900" /></div>
          </nav>

          <div className="text-center pt-12">
            <h2 className="text-6xl text-purple-500 font-medium dark:text-black">Mehul Aneja</h2> 
            <h3 className="text-2xl pt-5 text-purple-400 dark:text-slate-900">Contact: mehulaneja123@gmail.com</h3>
            <h3 className="text-2xl pb-10 text-purple-400 dark:text-slate-900">Bachelors in Computer Science & Mathematics @ New York University 2024</h3>
          </div>

          <div className="relative mx-auto rounded-full dark:border-black dark:border w-72 h-72 overflow-hidden">
            <Image className="-mt-10" src={Mehul}/>
          </div>

          <div className="pt-10 text-5xl flex justify-center gap-20 pb-16 text-gray-600">
            <SocialIcon className="rounded-full border border-white transition ease-in-out hover:-translate-y-1 delay-10 hover:scale-110 dark:border-black" style={{height: 75, width: 75}} url="https://www.linkedin.com/in/mehulaneja/" fgColor="white" target="_blank" />
            <SocialIcon className="rounded-full border border-white transition ease-in-out hover:-translate-y-1 delay-10 hover:scale-110 dark:border-black" style={{height: 75, width: 75}} url="mailto: mehulaneja123@gmail.com" bgColor="white" fgColor="#DB4437" target="_blank" />
            <SocialIcon className="rounded-full border border-white transition ease-in-out hover:-translate-y-1 delay-10 hover:scale-110 dark:border-black" style={{height: 75, width: 75}} url="https://github.com/mehul-aneja" bgColor="black" fgColor="white" target="_blank" />
          </div>

        </section>
      </main>
    </div>
    </>
  )
}
