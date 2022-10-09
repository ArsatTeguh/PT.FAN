import { Fragment } from "react";

type Props = {};

export default function Loader({}: Props) {
  return (
    <Fragment>
      <div className="">
        <div className="pokemon p-2 border-4 rounded flex flex-col gap-2 ">
          <div className="h-[2rem] bg-slate-300"></div>
          <div className="img w-64 h-48 bg-slate-400"></div>

          <div className=" flex gap-2">
            <div className="w-[50%] flex flex-col gap-2">
              <div className="img h-[1rem] bg-slate-300 roudend"></div>
              <div className="img h-[1rem] bg-slate-300 roudend"></div>
              <div className="img h-[1rem] bg-slate-300 roudend"></div>
            </div>
            <div className="w-[50%] flex flex-col gap-2">
              <div className="img h-[1rem] bg-slate-300 roudend"></div>
              <div className="img h-[1rem] bg-slate-300 roudend"></div>
              <div className="img h-[1rem] bg-slate-300 roudend"></div>
            </div>
          </div>

          <div className=" flex flex-col gap-1">
            <div className="img h-[1rem] bg-slate-300 roudend"></div>
            <div className="img h-[1rem] bg-slate-300 roudend"></div>
            <div className="img h-[1rem] bg-slate-300 roudend"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
