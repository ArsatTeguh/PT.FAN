import { Fragment, useState } from "react";
import ReactPaginate from "react-paginate";
import { useGetAllProductsQuery } from "../query-rtk/querySlice";
import { listPokemon } from "../type/type";
import Detail from "./detail";
import Loader from "./loader";

export default function Home() {
  const [id, setId] = useState<string>("https://pokeapi.co/api/v2/pokemon/1/");
  const [isActive, SetIsActive] = useState<boolean>(false);
  const [page, setPage] = useState(0);
  const [filters, setFilter] = useState("");

  const { data, error, isLoading } = useGetAllProductsQuery();

  let datas = data?.results?.filter((value: listPokemon) => {
    if (filters === "") {
      return value;
    } else if (value.name.toLowerCase().includes(filters.toLowerCase())) {
      return value;
    }
  });
  const jumlahDataPerPage = 20;
  const pagesVisited = page * jumlahDataPerPage;
  if (datas === undefined) return null;
  const pageCount = Math.ceil(datas!.length / jumlahDataPerPage);

  const handleList = (id: string) => {
    setId(id);
    SetIsActive(!isActive);
  };

  const changePage = ({ selected }: any) => {
    setPage(selected);
  };

  return (
    <Fragment>
      <div className="container mx-auto flex justify-between items-center py-10 h-screen">
        <div className="w-[50vw] flex justify-center">
          {isLoading && <Loader />}
          <Detail id={id} />
        </div>
        <div className=" justify-center flex flex-col gap-5">
          <div className="flex justify-end w-full border-b-2 pb-2">
            <input
              className="px-2 py-1 rounded "
              type="text"
              placeholder="Search Pokemon"
              onChange={(e: any) => setFilter(e.target.value)}
            />
          </div>
          <div className="list pb-4">
            {datas
              .slice(pagesVisited, pagesVisited + jumlahDataPerPage)
              .map((data: listPokemon) => {
                return (
                  <button
                    key={data.url}
                    className={`info px-4 text-center rounded-xl py-2 my-auto cursor-pointer hover:scale-105 transition-all delay-75 active:bg-red-500  focus:ring focus:ring-violet-300 focus:bg-red-500`}
                    onClick={() => handleList(data.url)}
                  >
                    <p className="text-md font-semibold text-slate-50 w-full">
                      {data.name}
                    </p>
                  </button>
                );
              })}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginattionBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisable"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </Fragment>
  );
}
