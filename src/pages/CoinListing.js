import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import CoinComponent from "../components/coinSummary/CoinComponent";
import { setCoins } from "../redux/actions/coinActions";
import classes from "./CoinListing.module.css";

const CoinListing = () => {
  const dispatch = useDispatch();

  const fetchCoins = useCallback(async () => {
    const response = await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .catch((error) => {
        console.log("Err", error);
      });
    dispatch(setCoins(response.data));
  }, [dispatch]);

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  return (
    <div className={classes.coinsContainer}>
      <CoinComponent />
    </div>
  );
};
export default CoinListing;
