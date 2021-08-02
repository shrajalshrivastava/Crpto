import React from "react";
import CoinData from "./CoinData";
import CoinName from "./CoinName";
import classes from "./CoinDescription.module.css";

const CoinDescription = () => {
  return (
    <div className={classes["coin-data-show"]}>
      <CoinName />
      <CoinData />
    </div>
  );
};

export default CoinDescription;
