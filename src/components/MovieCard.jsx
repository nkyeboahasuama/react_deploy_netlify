import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    const cleanedId = item.id.replace(/\/title\//, "");
    navigate(`/details/${cleanedId}`);
  };
  return (
    <div>
      <div
        onClick={() => handleClick(item)}
        className="bg-slate-400 w-[14rem] h-[20rem] m-10 list-none text-white shadow-md shadow-black border-none flex flex-col items-center justify-between rounded-xl cursor-pointer "
      >
        <div className="my-2 h-5/6 bg-slate-600 w-5/6 flex items-center justify-center rounded-md">
          <img className="w-5/6" src={`${item.image.url}`} alt="Movs" />
        </div>

        <div className="flex justify-center items-center bg-black w-full h-20 px-1 rounded-b-xl">
          <li className="font-extrabold text-center">{item.title}</li>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
