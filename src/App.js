import "./App.css";
import NavBar from "./components/NavBar";
import SearchContextProvider from "./context/SearchContext";
import MoviesHome from "./pages/MoviesHome";

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <NavBar />
      </SearchContextProvider>
    </div>
  );
}

export default App;
