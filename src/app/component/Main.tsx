import React from "react";
import { Preview } from "./Preview";
import Dashboard from "./Dashboard";
type Props = {
    className?: string;
}
export const Main = ({className}:Props) => {
  return (
    <div className={className}>
        <div className="grid  grid-rows-[40%_60%] h-full  gap-1">
        <Preview className=""/>
        <Dashboard  className="  flex flex-1 border-t-2 border-secondary overflow-auto"/>
        </div>
      
    </div>
  );
};
