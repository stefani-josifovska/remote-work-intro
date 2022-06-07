import React from "react";
import Button from "../UI/Button";
import classes from './MainContent.module.css';

const MainContent = () => {
  return (
    <div className={classes.container}>
      <h1>Make remote work</h1>
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <Button>Learn More</Button>
    </div>
  );
};

export default MainContent;
