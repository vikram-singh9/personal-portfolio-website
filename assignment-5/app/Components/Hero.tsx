import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Hero = () => {
  return (
    <div>
      <main className="bg-zinc-700 h-screen w-full flex justify-between items-center p-10 ">
        <div className="text-white w-1/2">
          <h1 className="text-5xl pb-3 font-mono text-red-500 font-bold">
            I'm Frontend <span className="text-yellow-500">Developer.</span>
          </h1>
          <p className="text-1xl font-mono">
            A self motivated and passionate developer with experties in forntend
            developement i use HTML, CSS, JavaScript/TypeScript with react and
            next js i also build AI stuffs like chatbots webpages and more for
            hiring you can contact me click on contact section thank you.
          </p>
          <span className="flex gap-6 mt-3 ">
          <a className="hover:text-zinc-300" href="https://www.linkedin.com/in/vikram-s-404839217"> <FaLinkedin width={30}/></a>
          <a className="hover:text-zinc-300" href="https://www.github.com/vikram-singh9"> <FaGithub width={60}/></a>
          <a className="hover:text-zinc-300" href="https://www.facebook.com/thaakur.saab"> <FaFacebook width={30}/></a>
          <a className="hover:text-zinc-300" href="https://www.instagram.com/vssodho_official"> <FaInstagram width={30}/></a>
          </span>
          <br />
          <Button
            className="rounded-full bg-yellow-500 text-zinc-800 hover:text-white font-mono"
            variant={"outline"}
          >
            Download CV
          </Button>
        </div>

        <div>
          <Image
            className="rounded-full hover:w-80 duration-150"
            src={"/images/img.jpg"}
            alt="img"
            height={200}
            width={300}
          />
        </div>
      </main>
    </div>
  );
};

export default Hero;
