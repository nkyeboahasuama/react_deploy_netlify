import { useContext } from "react";

import { SearchContext } from "../context/SearchContext";
import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  const { setItems, originalItems } = useContext(SearchContext);

  const debounce = (fn, delay = 1000) => {
    let timeOut;
    return (...args) => {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleChange = (e) => {
    const letter = e.target.value;
    searchItem(letter);
  };

  const searchItem = debounce((query) => {
    const searchResults = originalItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setItems(searchResults);
    console.log(searchResults);
  });

  return (
    <div className="flex items-center justify-center bg-white rounded-md w-fit h-7 px-3">
      <BsSearch className=" text-black mr-2" />
      <input
        type="text"
        placeholder="Search movie..."
        onChange={handleChange}
        className="bg-transparent focus:outline-none"
      />
    </div>
  );
};
