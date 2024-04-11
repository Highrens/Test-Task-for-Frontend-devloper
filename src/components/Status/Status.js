import "./Status.css";
import finger from "../../images/finger.png";

const TextNormal = {
  title: "Душнила доволен вами",
  subtitle: "Все показатели в норме",
};

const TextOverCo2 = {
  title: 'Душнила недоволен вами',
  subtitle: "CO2 превышает норму",
};

export default function Status(props) {
  return (
    <div
      className={
        props.isNormal ? "Status Status_normal" : "Status Status_over-co2"
      }
    >
      <h2 className="Status__title">{props.isNormal ? TextNormal.title : TextOverCo2.title}</h2>
      <h3 className="Status__subtitle">{props.isNormal ? TextNormal.subtitle : TextOverCo2.subtitle}</h3>
    </div>
  );
}
