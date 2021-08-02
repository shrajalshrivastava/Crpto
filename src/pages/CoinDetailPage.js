import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedCoin, selectedCoin } from "../redux/actions/coinActions";
import HistoryChart from "../components/CoinChart/HistroyChart";
import CoinDescription from "../components/CoinDescription/CoinDescription";

const CoinDetailPage = () => {
  const coin = useSelector((state) => state.coin);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(id);
  const formatData = (data) => {
    return data.map((elementOfData) => {
      return { t: elementOfData[0], y: elementOfData[1].toFixed(2) };
    });
  };
  const fetchCoinDetails = useCallback(async () => {
    const [day, week, year, detail] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=1`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=7`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=365`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&ids=${id}&order=market_cap_desc&per_page=10&page=1&sparkline=false`
      ),
    ]);
    dispatch(
      selectedCoin({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      })
    );
  }, [id, dispatch]);

  useEffect(() => {
    if (id && id !== "") fetchCoinDetails();
    return () => {
      dispatch(removeSelectedCoin());
    };
  }, [id, dispatch, fetchCoinDetails]);

  return (
    <>
      {Object.keys(coin).length === 0 ? (
        <div>....Loading</div>
      ) : (
        <div>
          <HistoryChart />
          <CoinDescription />
        </div>
      )}
    </>
  );
};

export default CoinDetailPage;
