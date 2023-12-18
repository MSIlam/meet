import CitySearch from "./components/CitySearch";
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from "./components/EventGenresChart";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";

import "./App.css";

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [warningDisplayed, setWarningDisplayed] = useState(false);

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
      setWarningDisplayed(false);
    } else {
      const warningText =
        "You are currently offline. The event list is not updated";
      setWarningAlert(warningText);
      if (!warningDisplayed) {
        toast.warning(warningText);
        setWarningDisplayed(true);
      }
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <div
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "Wheat",
          fontFamily: "Georgia, serif",
        }}
      >
        MeetBIT
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <div className="charts-container">
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <div>
        <div>
          <h3 style={{ color: "Honeydew" }}>Upcoming Events</h3>
        </div>
        <EventList events={events} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;

// <div className="alerts-container">
//         {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
//         {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
//         {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
//       </div>
