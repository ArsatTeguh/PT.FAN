import  { Fragment } from "react";
import { useGetOneBookQuery } from "../query-rtk/querySlice";

type Props = {
  id: string;
};

export default function Detail({ id }: Props) {
  const { data, error, isLoading } = useGetOneBookQuery(id);
  let hp = data?.stats.map((e) => e.base_stat).slice(0, 1);
  let attack = data?.stats.map((e) => e.base_stat).slice(1, 2);
  let deffens = data?.stats.map((e) => e.base_stat).slice(2, 3);

  return (
    <Fragment>
      <div className="">
        <div className="pokemon p-2 rounded flex flex-col gap-2 ">
          <div className=" name-pokemon bg-slate-300 flex justify-between px-2">
            <p className="text-slate-50 text-xl font-semibold">
              No. {data?.id}
            </p>
            <p className="text-slate-50 text-xl font-semibold ">{data?.name}</p>
          </div>
          <div className="img w-64 h-48 ">
            <img
              className="w-full flex items-center h-full "
              src={data?.sprites.back_default}
              alt=""
            />
          </div>

          <div className=" flex gap-1">
            <div className="w-[50%] flex flex-col gap-1">
              <div className="img px-2 py-1 bg-slate-300 text-center rounded">
                <p className="font-bold text-slate-700">Type</p>
              </div>
              <div className="img px-2 py-1 bg-slate-300 text-center rounded">
                <p className="font-bold text-slate-700">Height</p>
              </div>
              <div className="img px-2 py-1 bg-slate-300 text-center rounded">
                <p className="font-bold text-slate-700">Weight</p>
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-1">
              <div className="img px-2 py-1 bg-info text-start rounded">
                <p className="font-bold text-slate-200">{data?.species.name}</p>
              </div>
              <div className="img px-2 py-1 bg-info text-start rounded">
                <p className="font-bold text-slate-200"> {data?.height} cm </p>
              </div>
              <div className="img px-2 py-1 bg-info text-start rounded">
                <p className="font-bold text-slate-200"> {data?.weight} Lbs </p>
              </div>
            </div>
          </div>

          <div className=" flex text-slate-50 flex-col gap-1 relative">
            <div className="bg-slate-300 text-black w-full relative roudend flex px-2 rounded ">
              <p className="font-semibold z-20 text-slate-50 ">
                {data?.stats.map((e) => e.stat.name).slice(0, 1)}{" "}
              </p>
              <p className="font-semibold w-full flex justify-end z-20">
                {hp}%
              </p>
              <div
                className={`absolute top-0 h-full left-0 statis bg-info transition-all delay-300  ease-in-out duration-500`}
                style={{ width: `${hp && `${hp}%`}` }}
              ></div>
            </div>

            <div className="infos2 roudend bg-slate-300 flex justify-between px-2 rounded relative ">
              <p className="font-semibold z-20 text-slate-50">
                {data?.stats.map((e) => e.stat.name).slice(1, 2)}{" "}
              </p>
              <p className="font-semibold text-black z-20">{attack}%</p>
              <div
                className={`absolute top-0 h-full left-0 statis bg-info transition-all delay-300  ease-in-out duration-500`}
                style={{ width: `${attack && `${attack}%`}` }}
              ></div>
            </div>
            <div className="infos3 roudend bg-slate-300 flex justify-between px-2 rounded relative">
              <p className="font-semibold z-20 text-slate-50">
                {data?.stats.map((e) => e.stat.name).slice(2, 3)}{" "}
              </p>
              <p className="font-semibold text-black z-20">{deffens}%</p>
              <div
                className={`absolute top-0 h-full left-0 statis bg-info transition-all delay-300  ease-in-out duration-500`}
                style={{ width: `${deffens && `${deffens}%`}` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
