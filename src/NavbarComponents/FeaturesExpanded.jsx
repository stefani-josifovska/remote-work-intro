import React from "react";
import classes from "./FeaturesExpended.module.css";
import todoImage from "../images/icon-todo.svg";
import calendarImage from "../images/icon-calendar.svg";
import remindersImage from "../images/icon-reminders.svg";
import planningImage from "../images/icon-planning.svg";

const featuresExpanded = [
  { imageSrc: todoImage, content: "Todo List" },
  {
    imageSrc: calendarImage,
    content: "Calendar",
  },
  { imageSrc: remindersImage, content: "Reminders" },
  { imageSrc: planningImage, content: "Planning" },
];

const FeaturesExpanded = () => {
  return (
    <ul className={classes["features-expanded-list"]}>
      {featuresExpanded.map((el) => {
        return (
          <li key={Math.random().toString()}>
            <img
              src={el.imageSrc}
              alt=""
              className={classes["image-expanded-list"]}
            />
            {el.content}
          </li>
        );
      })}
    </ul>
  );
};

export default FeaturesExpanded;
