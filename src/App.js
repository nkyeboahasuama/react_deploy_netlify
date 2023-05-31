import "./App.css";
import NavBar from "./components/NavBar";
import SearchContextProvider from "./context/SearchContext";
import ExploreMovie from "./pages/ExploreMovie";
import MoviesHome from "./pages/MoviesHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MoviesHome />} />

            <Route path="/details/:movieId" element={<ExploreMovie />} />
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </div>
  );
}

export default App;
