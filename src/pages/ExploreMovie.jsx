import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ExploreMovie = () => {
  const [movie, setMovie] = useState([]);
  let { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "bca07a01aemshc113c7875dd1d6bp1795f8jsn2f8e6671d464",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(
          `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=${movieId}`,
          options
        );
        const result = await response.json();
        console.log(result);
        console.log("ok");
        setMovie(result);
      } catch (error) {
        console.error(error);
        console.log("not ok", movieId);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <div>
      <button
        className="bg-blue-600 p-3 mx-10 mt-2 text-white hover:bg-blue-800"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[25rem] bg-gray-400 h-[35rem] flex flex-col justify-between items-center rounded-3xl hover:-translate-y-3 hover:shadow-2xl duration-500 cursor-pointer">
          <img
            src={`${movie?.image?.url}`}
            alt="pro"
            className="bg-red-600 w-3/4 h-3/4 mt-2 rounded-lg"
          />
          <div className="bg-gray-600 w-full h-28 flex flex-col items-center justify-center rounded-b-3xl">
            <h2 className="font-bold text-xl text-center px-1">
              {movie?.title}
            </h2>
            <h3 className="font-lighter">Show Type:{movie?.titleType}</h3>
            {movie?.year ? (
              <span>Year of release: {movie.year}</span>
            ) : (
              <span>
                Years of show: {movie?.seriesStartYear}-{movie?.seriesEndYear}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMovie;
