import React from "react";
import "./CoinName.css";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

const CoinName = () => {
  const coinDetails = useSelector((state) => state.coin.detail);
  const { image, symbol, name } = coinDetails;
  console.log(image, symbol, name);

  return (
    <Card>
      <div className="cName">
        <div className="aligned author">
          <img className="ui avatar image" src={image} alt={`${name}`} />
          <span className="distance">{symbol.toUpperCase()}</span>
          <div className=" text aligned header">{name}</div>
        </div>
      </div>
      <div className="currencyName">
        <div className="aligned author">
          <img
            className="ui  avatar image"
            src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/INR.svg"
          />
          <span className="distance">INR</span>
          <div className=" text aligned header">Indian Rupees</div>
        </div>
      </div>
    </Card>
  );
};

export default CoinName;
