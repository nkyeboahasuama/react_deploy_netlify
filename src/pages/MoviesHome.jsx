import { useContext } from "react";
import MovieCard from "../components/MovieCard";

import { SearchContext } from "../context/SearchContext";

const MoviesHome = () => {
  const { items } = useContext(SearchContext);

  return (
    <div className="flex flex-wrap justify-evenly items-center">
      <div className="font-bold w-full h-5 flex items-center justify-center">
        {/* {items.length < 1 && "Item not available"} */}
      </div>
      {items.map((item) => (
        <MovieCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default MoviesHome;
