import "./Status.css";
import finger from "../../images/finger.png";

const TextNormal = {
  title: "Душнила доволен вами",
  subtitle: "Все показатели в норме",
};

const TextOver = {
  title: "Душнила недоволен вами ",
  subtitle: " превышает норму",
};

export default function Status(props) {
  return (
    <div
      className={
        props.isNormal ? "Status Status_normal" : "Status Status_over-co2"
      }
    >
      <h2 className="Status__title">
        {props.isNormal ? TextNormal.title : TextOver.title}
        <img
          className={
            props.isNormal
              ? "Status__title-img Status__title-img_hidden"
              : "Status__title-img"
          }
          src={finger}
          alt="finger"
        ></img>
      </h2>
      <h3 className="Status__subtitle">

        {props.isNormal ? TextNormal.subtitle : props.reason + " " + TextOver.subtitle}
      </h3>
    </div>
  );
}
