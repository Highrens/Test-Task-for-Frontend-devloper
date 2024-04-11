import "./History.css";
export default function History(props) {
  return (
    <div className="History">
      <h2 className="History__days">{props.days}</h2>
      <button className="History__to-history-button">
        История
        <svg className="History__to-history-button-arrow"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 14.2521L18.6667 8.41879M24.5 14.2521L18.6667 20.0855M24.5 14.2521H3.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
