import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-yellow-500 flex justify-between items-center h-16 font-mono p-10">
        <div className="text-3xl text-red-500 bg-purple-300 p-2 rounded-xl">
          <h2>
            P.<span className="text-zinc-600">Folio</span>
          </h2>
        </div>

        <div className="flex gap-4 ">
          <a href="#" className="hover:underline">
            All Rights Reserved
          </a>
          <a href="#" className="hover:underline">
            LinkedIN
          </a>
          <a href="#" className="hover:underline">
          <p>Developer:<strong>Vikram</strong></p>
          </a>
          <a href="#" className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
