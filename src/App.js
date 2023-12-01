import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import mockData from "./mock-data";
import NumberOfEvents from "./components/NumberOfEvents";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const allLocations = Array.from(
    new Set(mockData.map((event) => event.location))
  );
  return (
    <div className="App">
      <h1>Meet App</h1>
      <p>Choose your nearest city:</p>
      <CitySearch allLocations={allLocations} />
      <NumberOfEvents />
      <EventList events={mockData} />
    </div>
  );
};

export default App;
