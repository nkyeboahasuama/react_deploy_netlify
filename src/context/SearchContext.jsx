import { createContext, useState, useEffect } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://online-movie-database.p.rapidapi.com/title/v2/find?title=game&titleType=game&limit=30";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "bca07a01aemshc113c7875dd1d6bp1795f8jsn2f8e6671d464",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setItems(result.results);
        setOriginalItems(result.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <SearchContext.Provider value={{ items, setItems, originalItems }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
