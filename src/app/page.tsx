import React from "react";
import Navbar from "./component/Navbar";
import { Sidebar } from "./component/Sidebar";
import { Main } from "./component/Main";
const page = () => {
  return (
    // <div className=" min-h-screen bg-background text-secondary flex flex-col ">
    //   <Navbar />
    //   <div className="flex flex-1 justify-between">
    //     <Sidebar className="h-full bg-secondary w-[20%] text-white flex justify-center" />
    //     <Main className="flex-1 h-full w-[80%]" />
    //   </div>
    // </div>
    <div className="h-screen bg-background text-secondary flex flex-col">
  <Navbar />

  <div className="flex flex-1 overflow-hidden">
    <Sidebar className="w-64 h-full bg-secondary text-white flex justify-center" />
    <Main className="flex-1 h-full overflow-y-auto" />
  </div>
</div>  
  );
};

export default page;
