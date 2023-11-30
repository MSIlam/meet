import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import Event from "./components/Event";

const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <Event />
    </div>
  );
};

export default App;
