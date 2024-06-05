import './App.css';
import Search from "./Search";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Search />
      <Details />
      <footer>This project is hosted on
        <a href="https://github.com/Ruks-7/weather-forecast-react">Github</a>.
      </footer>
    </div>
  );
}

export default App;
