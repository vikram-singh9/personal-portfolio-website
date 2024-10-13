import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const Message = () => {
  return (
    <>
      <h1 className=" bg-zinc-700 text-5xl pt-64 font-mono font-bold text-red-500 text-center underline">
        Contact me
      </h1>
      <div className="h-screen w-full bg-zinc-700 flex justify-center items-center ">
        <div className="w-96 bg-white p-10 rounded-xl">
          <h1 className="text-2xl text-center text-zinc-800 font-bold font-mono p-3 ">
            Send me a Message :)
          </h1>
          <div className="grid w-full max-w-sm items-center gap-1.5 p-2 font-mono">
            <Label htmlFor="text">Name</Label>
            <Input type="text" id="text" placeholder="Username" />
            <Label htmlFor="text">Email</Label>
            <Input type="email" id="email" placeholder="Email" />

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message" className="h-32"/>
            </div>
            <Button variant={'outline'}>Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
