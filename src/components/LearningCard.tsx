import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function LearningCard(props: {
  active: number;
  key: number;
  title: string;
  icon: any;
  color: string;
  description: string;
  progress: number;
  onClick: () => void;
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (props.key === props.active) setActive(true);
    else setActive(false);
  }, [props.active]);

  return (
    <div
      className={`learning-card ${active ? "active" : ""}`}
      key={props.key}
      onClick={props.onClick}
    >
      <div className="learning-card-left">
        <div className="learning-card-icon-container">
          <props.icon
            size={40}
            color={props.color}
            className="learning-card-icon"
          />
        </div>
        <div className="learning-card-title-desc">
          <div className="learning-card-title">{props.title}</div>
          <div className="learning-card-description">{props.description}</div>
        </div>
      </div>
      <div className="learning-card-right">
        <CircularProgressbar
          value={props.progress}
          styles={buildStyles({
            pathColor: props.color,
            textColor: "black",
            textSize: "25px",
          })}
          text={`${props.progress}%`}
        />
      </div>
    </div>
  );
}
