import "./App.css";
import Status from "./components/Status/Status";
import Statistics from "./components/Statistics/Statistics";
import History from "./components/History/History";
import goodLogo from "./images/Logo.svg";
import { getData } from "./Api/Api";
import { useEffect, useState } from "react";

function App() {
  const [isNormal, setIsNormal] = useState(true);
  const [reason, setReason] = useState("easteregg");
  const [co2Level, setCo2Level] = useState(543.4);
  const [temperature, setTemperature] = useState(23.1);
  const [goodDays, setGoodDays] = useState(179);

  function UpdateData() {
    getData().then((res) => {
      if (res) {
        console.log(res);
        if (res.co2 > 800 || res.temp > 27) {
          //Что то не впорядке, сбрасываем дни
          setIsNormal(false);
          setGoodDays(0)
          //Ищем и ставим виновных
          if (res.co2 > 800 && res.temp > 27) {
            setReason("CO2 и температура");
          } else {
            setReason(res.co2 > 800 ? "CO2" : "Температура");
          }
          
        } else {
          //Все пучком
          setIsNormal(true);
          setGoodDays(Math.round(Math.random() * 10));
        }

        setCo2Level(Math.round(res.co2));
        setTemperature(res.temp);
      }
    }).catch((err) => {
      //Ловим ошибки
      setIsNormal(false);
      setReason("Что то сломалось :(")
    });
  }

  useEffect(() => {
    UpdateData();
    const intervalId = setInterval(UpdateData, 60000); // Запускаем запрос каждые 60 секунд

    return () => clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
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
          <Status isNormal={isNormal} reason={reason} />
          <Statistics
            isNormal={isNormal}
            temperature={temperature}
            co2={co2Level}
          />
          <History days={goodDays} />
          <div className="goodLogo-container">
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
