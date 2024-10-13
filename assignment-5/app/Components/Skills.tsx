import React from "react";

const Skills = () => {
  return (
    <>
      <h1 className="text-5xl text-center text-red-500 bg-zinc-700 font-bold font-mono underline">
        SKILLS
      </h1>

      <div className="h-screen w-full bg-zinc-700 text-white font-mono p-10 flex justify-evenly items-center text-start flex-wrap gap-8">
        <div className="w-1/4 border p-3 rounded-xl">
          <h1 className="text-2xl text-yellow-500 font-bold ">
            WEB DEVELOPEMENT{" "}
          </h1>
          <p className="w-60">
            Web Developer specializing in creating responsive and user-friendly
            websites. Skilled in HTML, CSS, JavaScript, and modern frameworks
            like React and Next.js to build dynamic, high-performance web
            applications.
          </p>
        </div>

        <div className="w-1/4 p-3 border rounded-xl ">
          <h1 className="text-2xl font-bold text-yellow-500">GRAPHIC DESIGN</h1>
          <p className="w-60">
            Graphic Designer with a passion for creating visually stunning and
            engaging designs. Proficient in Adobe Photoshop, Illustrator, and
            InDesign, with experience in branding, social media graphics, and
            print design.
          </p>
        </div>
        <div className="w-1/4 p-3 border rounded-xl">
          <h1 className="text-2xl font-bold text-yellow-500">
            DIGITAL MARKETING
          </h1>
          <p className="w-60">
            Digital Marketing Specialist with expertise in creating and
            executing effective online marketing strategies. Skilled in SEO,
            social media marketing and content creation to drive brand awareness
            and engagement.
          </p>
        </div>

        <div className="w-1/4 border rounded-xl p-3">
          <h1 className="text-2xl font-bold text-yellow-500">SEO</h1>
          <p className="w-60">
            SEO Specialist skilled in optimizing websites to achieve higher
            search engine rankings and drive organic traffic. Experienced in
            keyword research, on-page and off-page optimization and I create
            various strategies to boost business.
          </p>
        </div>

        <div className="w-1/4 p-3 border rounded-xl">
          <h1 className="text-2xl font-bold text-yellow-500">MS OFFICE</h1>
          <p className="w-60">
            Proficient in Microsoft Office Suite, including Word and Excel.
            Skilled in creating professional documents, spreadsheets and
            presentations. Known for streamlining processes, managing data, and
            ensuring productivity through advanced Office skills.
          </p>
        </div>

        <div className="w-1/4 p-3 border rounded-xl">
          <h1 className="text-2xl font-bold text-yellow-500">
            ENGLISH SPEAKING
          </h1>
          <p className="w-60">
            Fluent English speaker with strong communication skills, able to
            articulate thoughts clearly and engage in effective conversations.
            Experienced in delivering presentations and providing excellent
            customer service with a focus on clarity and professionalism.
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
