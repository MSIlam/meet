import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { ToastContainer } from "react-toastify";
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
  // const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert(
        "You are currently offline. The event list is not updated"
      );
    }
    fetchData();
    // const handleOnlineStatusChange = () => {
    //   setIsOnline(navigator.onLine);
    // };
    // window.addEventListener("online", handleOnlineStatusChange);
    // window.addEventListener("offline", handleOnlineStatusChange);

    // return () => {
    //   // Cleanup event listeners when component unmounts
    //   window.removeEventListener("online", handleOnlineStatusChange);
    //   window.removeEventListener("offline", handleOnlineStatusChange);
    // };
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
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
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
      <EventList events={events} />
      <ToastContainer />
    </div>
  );
};

export default App;
