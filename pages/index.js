import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web-5.png";
import web2 from "../public/web-2.png";
import web3 from "../public/web-6.png";
import web4 from "../public/web-9.png";
import web5 from "../public/web-13.png";
import web6 from "../public/web-17.png";
import { useState } from "react";
import Progressbar from "../components/progress_bar";
import { render } from "react-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const percentage = 66;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Davdavcoco</title>
        <meta name="description" content="Portfolio of davdavcoco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">davdavcoco</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li className="">
                <a
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-md ml-8"
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-orange-500 font-medium md:text-6xl">
              David Adiel
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Developer and a little bit designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              I am an Full Stack Developer and NodeJS specialist. Feel free to
              take a look at my latest portfolio at the bottom. Join me down
              below and let's get hyped !
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://twitter.com/davidadiel">
              <AiFillTwitterCircle />
            </a>
            <a href="">
              <AiFillYoutube />
            </a>
            <a href="https://www.linkedin.com/in/david-adiel-1b9187243/">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-red-500 rounded-full w-80 h-80 mt-20 to-orange-500 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" 
                alt="character"/>
          </div>
        </section>
        <section className="md:flex md:justify-content md:gap-16">
          <div className="py-2">
            <h2 className="text-3xl py-2 font-medium md:text-2xl text-gray-600">
              Professional Skills
            </h2>
            <p className="py-2 pb-2 font-medium">NodeJS</p>
            <Progressbar bgcolor="orange" progress="80" height={10} />
            <p className="py-2 pb-2 font-medium">React</p>
            <Progressbar bgcolor="orange" progress="30" height={10} />
            <p className="py-2 pb-2 font-medium">Boostrap</p>
            <Progressbar bgcolor="orange" progress="90" height={10} />
          </div>
          <div className="py-2">
            <h2 className="text-3xl py-2 font-medium md:text-2xl text-gray-600">
              Professional Skills
            </h2>
            <div className="flex justify-between gap-8">
              <div className="mb-10 w-1/6 h-1/6 ">
                <CircularProgressbar
                  value={`95`}
                  text={`95%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "orange",
                    trailColor: "gray",
                  })}
                />
                <p className="py-2 pb-2 font-medium">HTML</p>
              </div>
              <div className="mb-10 w-1/6 h-1/6">
                <CircularProgressbar
                  value={`80`}
                  text={`80%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "orange",
                    trailColor: "gray",
                  })}
                />
                <p className="py-2 pb-2 font-medium">CSS</p>
              </div>
              <div className="mb-10 w-1/6 h-1/6">
                <CircularProgressbar
                  value={`85`}
                  text={`85%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "orange",
                    trailColor: "gray",
                  })}
                />
                <p className="py-2 pb-2 font-medium">MYSQL</p>
              </div>
              <div className="mb-10 w-1/6 h-1/6">
                <CircularProgressbar
                  value={`60`}
                  text={`60%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "orange",
                    trailColor: "gray",
                  })}
                />
                <p className="py-2 pb-2 font-medium">PHP</p>
              </div>
              <div className="mb-10 w-1/6 h-1/6">
                <CircularProgressbar
                  value={`80`}
                  text={`80%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "orange",
                    trailColor: "gray",
                  })}
                />
                <p className="py-2 pb-2 font-medium">IONIC</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Since the beginning of my journey as a freelancer developer, I've
              done a remote work for
              <span className="text-orange-500"> agencies </span>
              consulted for <span className="text-orange-500">startups </span>
              and collaborated with talented people to create for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover w-full h-full"
                layout="objectFit"
                alt="web portfolio 1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover w-full h-full"
                layout="objectFit"
                alt="web portfolio 2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover w-full h-full"
                layout="objectFit"
                alt="web portfolio 3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover w-full h-full"
                layout="objectFit"
                alt="web portfolio 4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover w-full h-full"
                layout="objectFit"
                alt="web portfolio 5"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web portfolio 6"
              />
            </div>
          </div>
        </section>
        <section>
          <footer className="text-center pb-2 text-gray-800 dark:text-gray-400">
            <div>developed by &copy; 2023 davdavcoco</div>
          </footer>
        </section>
      </main>
    </div>
  );
}
