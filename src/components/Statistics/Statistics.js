import { useEffect } from "react";
import "./Statistics.css";

export default function Statistics(props) {
  useEffect(()=>{
    
  })

  return (
    <div className={props.isNormal ? "Statistics Statistics_normal" : "Statistics Statistics_over-co2"}>
      <h2 className="Statistics__big-numbers">{props.temperature}</h2>
      <h3 className="Statistics__subtitle">Температура</h3> 
      <h2 className="Statistics__big-numbers">{props.co2}</h2>
      <h3 className="Statistics__subtitle">CO2</h3> 
    </div>
  );
}