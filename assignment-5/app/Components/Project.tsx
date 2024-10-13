import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <>
      <h1 className="text-5xl text-red-500 font-mono font-bold text-center bg-zinc-700 pt-20 underline">
        MY PROJECTS
      </h1>
      <div className="h-screen w-full bg-zinc-700 p-10 flex justify-evenly items-center flex-wrap gap-10">
        <div className="text-zinc-800 flex justify-end items-center gap-6 mt-12 w-2/5 font-mono bg-blue-200 p-6 rounded-xl">
          <Image
            className="rounded-full"
            src={"/images/favicon.jpeg"}
            alt="img"
            height={200}
            width={300}
          />

          <p>
            <span className="text-3xl font-bold text-red-400">
              Tic Tac Toe.
            </span>{" "}
            <br /> This project showcases my skills in React-based frameworks,
            state management, and interactive UI design. The goal was to create
            a fun and user-friendly web-based game that works seamlessly across
            devices. <br />{" "}
            <a href="https://vercel.live/link/tic-tac-toe-xi-pied.vercel.app?via=project-dashboard-alias-list&p=1" className="text-blue-600 hover:underline">
              Click here to Play
            </a>
          </p>
        </div>
        <div className="text-zinc-800 flex justify-end items-center gap-6 mt-12 w-2/5 font-mono bg-blue-200 p-6 rounded-xl">
          <Image
            className="rounded-full"
            src={"/images/rock.jpg"}
            alt="img"
            height={200}
            width={115}
          />

          <p>
            <span className="text-2xl font-bold text-red-400">
              Rock Paper Scissor.
            </span>{" "}
            <br />
            This game shows my ability to create native web applications using
            latest tech This project is a latest JS project. This
            project is a web-based game that allows users to play the game
            against computer.
            <br />{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Click here to Play
            </a>
          </p>
        </div>

        <div className="text-zinc-800 flex justify-end items-center gap-6 mt-12 w-2/5 font-mono bg-blue-200 p-6 rounded-xl">
          <Image
            className="rounded-full"
            src={"/images/todo.png"}
            alt="img"
            height={200}
            width={300}
          />

          <p>
            <span className="text-3xl font-bold text-red-400">To Do App.</span>{" "}
            <br /> I built a To-Do App in Next.js to showcase my skills This
            project allows users to manage their tasks efficiently, offering
            features like adding, editing, and deleting tasks in a user-friendly
            interface. <br />{" "}
            <a href="https://vercel.live/link/to-do-app-three-cyan.vercel.app?via=project-dashboard-alias-list&p=1" className="text-blue-600 hover:underline">
              Click here to Play
            </a>
          </p>
        </div>

        <div className="text-zinc-800 flex justify-end items-center gap-6 mt-12 w-2/5 font-mono bg-blue-200 p-6 rounded-xl">
          <Image
            className="rounded-full"
            src={"/images/cal.png"}
            alt="img"
            height={200}
            width={210}
          />

          <p>
            <span className="text-3xl font-bold text-red-400">Calculator.</span>{" "}
            <br /> I developed a Calculator App using Next.js that provides a
            clean user experience for performing basic arithmetic operations.
            This project highlights my ability to build interactive
            applications. <br />{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Click here to Play
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
