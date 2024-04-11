import "./App.css";
import Status from "./components/Status/Status";
import Statistics from "./components/Statistics/Statistics";
import History from "./components/History/History";
import goodLogo from "./images/Logo.svg";
import { getData } from "./Api/Api";
import { useEffect, useState } from "react";

function App() {
  const [isNormal, setIsNormal] = useState(true);
  const [co2Level, setCo2Level] = useState(543.4);
  const [temperature, setTemperature] = useState(23.1);

  useEffect(() => {
    getData().then((res) => {
      if (res) {
        console.log(res);
        if (res.co2 > 800 || res.temp > 27) {
          setIsNormal(false);
        } else {
          setIsNormal(true);
        }

        setCo2Level(res.co2);
        setTemperature(res.temp);
      }
    });
  }, []);

  useEffect(() => {
    console.log(isNormal);
  }, [isNormal]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">ДУШНИЛА</h1>
      </header>
      <main className="main">
        <div className="grid-container">
          <Status
            isNormal={isNormal}
            title="Душнила доволен вами"
            subtitle="Все показатели в норме"
          />
          <Statistics
            isNormal={isNormal}
            temperature={temperature + " ℃"}
            co2={co2Level + " ppm"}
          />
          <History days="Дней без душноты 0" />
          <div className="goodLogo">
            <img
              className="goodLogo-image"
              src={goodLogo}
              alt="goodbussines"
            ></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
