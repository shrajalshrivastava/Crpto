import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CoinComponent.css";

const CoinComponent = () => {
  const coins = useSelector((state) => state.allCoins.coins);

  const renderList = coins.map((coin) => {
    const {
      id,
      name,
      current_price,
      symbol,
      market_cap,
      total_volume,
      image,
      price_change_percentage_24h,
    } = coin;
    return (
      <div className="cryptoCoin" key={id}>
        <Link to={`/coin/${id}`}>
          <img src={image} alt={`${name}`} className="coinLogo" />
          <div className="coinNameWrap">
            <h1 className="coinName">{name}</h1>
            <p className="coinSymbol">{symbol}</p>
          </div>
          <p className="coinPrice">₹{current_price.toLocaleString()}</p>
          <p className="coinMarketcap">
            Market Cap: ₹{market_cap.toLocaleString()}
          </p>
          <p className="coinVolume">
            Volume (24H): ₹{total_volume.toLocaleString()}
          </p>
          {price_change_percentage_24h < 0 ? (
            <div className="priceContainerDOWN">
              <i className="fas fa-angle-down fa-2x"></i>
              <p className="priceChange">
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          ) : (
            <div className="priceContainerUP">
              <i className="fas fa-angle-up fa-2x"></i>
              <p className="priceChange">
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          )}
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default CoinComponent;
