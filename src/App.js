import React , {useState} from 'react';

const App = () => {

  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureValueFarenheit, setTemperatureValueFarenheit] = useState(50);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 35) return;

    const newTemperature = temperatureValue + 1;

    setTemperatureValueFarenheit((Math.trunc(newTemperature * 9/5) + 32))
    setTemperatureValue(newTemperature);

    if (newTemperature >= 13 && newTemperature < 25) {
      setTemperatureColor("warm");
      return
    }
    if (newTemperature >= 25) {
      setTemperatureColor("hot");
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;

    const newTemperature = temperatureValue - 1;
    setTemperatureValueFarenheit((Math.trunc(newTemperature * 9/5) + 32))
    setTemperatureValue(newTemperature);
    if (newTemperature >= 15 && newTemperature < 25) {
      setTemperatureColor("warm");
      return
    }
    if (newTemperature < 13) {
      setTemperatureColor("cold");
    }
  };

  return (
    <div className="container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValueFarenheit}°F
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  )
}

export default App;
