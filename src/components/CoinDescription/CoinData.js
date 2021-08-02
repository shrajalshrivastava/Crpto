import React from "react";
import Card from "../UI/Card";
import classes from "./CoinData.module.css";
import { useSelector } from "react-redux";

const CoinData = () => {
  const coinDetails = useSelector((state) => state.coin.detail);

  const {
    symbol,
    name,
    current_price,
    market_cap,
    market_cap_rank,
    fully_diluted_valuation,
    total_volume,
    high_24h,
    low_24h,
    price_change_24h,
    price_change_percentage_24h,
    market_cap_change_24h,
    market_cap_change_percentage_24h,
    circulating_supply,
    total_supply,
    max_supply,
    ath,
    ath_change_percentage,
    atl,
    atl_change_percentage,
  } = coinDetails;

  return (
    <div className={classes.maindiv}>
      <header className={classes.header}>
        <h2>{`${symbol.toUpperCase()} Price Statistics`}</h2>
      </header>
      <p className={classes.priceSpan}>{`${name} Price Today`}</p>
      <div className={classes.content}>
        <span>{`${name} Price`}</span>
        <span className={classes.span}>{`₹${current_price}`}</span>
      </div>
      <div className={classes.secondContent}>
        <span>
          Price Change <span className={classes.time}>24h</span>
        </span>
        <div>
          <span className={classes.span}>{`₹${price_change_24h.toFixed(
            4
          )}`}</span>
          <p className={classes.para}>
            <i className={`fas fa-angle-up ${classes.percentage}`}></i>
            <span
              className={classes.percentage}
            >{`${price_change_percentage_24h.toFixed(2)}%`}</span>
          </p>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>24h Low / 24h High</span>
        <div>
          <span className={classes.span}>{`₹${high_24h}/`}</span>
          <p className={classes.span}>{`₹${low_24h}`}</p>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>
          Trading Volume
          <span className={classes.time}>24h</span>
        </span>
        <div>
          <span className={classes.span}>{`₹${total_volume}`}</span>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>Market Rank</span>
        <div>
          <span className={classes.span}>{`#${market_cap_rank}`}</span>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>Market Cap</span>
        <div>
          <span className={classes.span}>{`₹${market_cap}`}</span>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>
          Market Cap Change <span className={classes.time}>24h</span>
        </span>
        <div>
          <span className={classes.span}>{`₹${market_cap_change_24h.toFixed(
            2
          )}`}</span>
          <p className={classes.para}>
            <i className={`fas fa-angle-up ${classes.percentage}`}></i>
            <span
              className={classes.percentage}
            >{`${market_cap_change_percentage_24h.toFixed(2)}%`}</span>
          </p>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>Fully Diluted Market Cap</span>
        <div>
          <span className={classes.span}>
            {fully_diluted_valuation !== null
              ? `₹${fully_diluted_valuation}`
              : `--`}
          </span>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>All Time High</span>
        <div>
          <span className={classes.span}>{`₹${ath}`}</span>
          <p className={classes.para}>
            <i className={`fas fa-angle-down ${classes.percentage}`}></i>
            <span
              className={classes.percentage}
            >{`${ath_change_percentage.toFixed(2)}%`}</span>
          </p>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>All Time Low</span>
        <div>
          <span className={classes.span}>{`₹${atl}`}</span>
          <p className={classes.para}>
            <i className={`fas fa-angle-down ${classes.percentage}`}></i>
            <span
              className={classes.percentage}
            >{`${atl_change_percentage.toFixed(2)}%`}</span>
          </p>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>Circulating Supply</span>
        <div>
          <span
            className={classes.span}
          >{`${circulating_supply} ${symbol.toUpperCase()}`}</span>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>Total Supply</span>
        <div>
          <span className={classes.span}>
            {total_supply !== null
              ? `${total_supply} ${symbol.toUpperCase()}`
              : `--`}
          </span>
        </div>
      </div>
      <div className={classes.secondContent}>
        <span>Max Supply</span>
        <div>
          <span className={classes.span}>
            {max_supply !== null
              ? `${max_supply} ${symbol.toUpperCase()}`
              : `--`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinData;
