//@ts-nocheck
import React, { useState } from "react";
import LearningCard from "../components/LearningCard";
import { TbTarget } from "react-icons/tb";
import { SiXrp } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";
import fetchData from "../api/fetchData";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const coins = [
  {
    id: 1,
    name: "eth",
    icon: FaEthereum,
    title: "Ethereum",
    color: "var(--googleBlue)",
    description: "Increased by 9%",
    progress: 69,
    src: "https://assets1.lottiefiles.com/packages/lf20_icohf8fe.json",
  },
  {
    id: 2,
    name: "doge",
    icon: SiDogecoin,
    title: "Dogecoin",
    color: "var(--googleBlue)",
    description: "Increased by 12%",
    progress: 32,
    src: "https://assets7.lottiefiles.com/packages/lf20_lrdzrr4m.json",
  },
  {
    id: 3,
    name: "xrp",
    icon: SiXrp,
    title: "XRP",
    color: "var(--googleBlue)",
    description: "Increased by 63%",
    progress: 67,
    src: "https://assets5.lottiefiles.com/packages/lf20_cZg2ZStvee.json",
  },
  {
    id: 4,
    name: "btc",
    icon: FaBitcoin,
    title: "Bitcoin",
    color: "var(--googleBlue)",
    description: "Increased by 5%",
    progress: 50,
    src: "https://assets1.lottiefiles.com/packages/lf20_zy0hqolm.json",
  },
  {
    id: 5,
    name: "eth",
    icon: FaEthereum,
    title: "Ethereum",
    color: "var(--googleBlue)",
    description: "Increased by 9%",
    progress: 69,
    src: "https://assets3.lottiefiles.com/packages/lf20_icohf8fe.json",
  },
  {
    id: 6,
    name: "doge",
    icon: SiDogecoin,
    title: "Dogecoin",
    color: "var(--googleBlue)",
    description: "Increased by 12%",
    progress: 32,
    src: "https://assets7.lottiefiles.com/packages/lf20_lrdzrr4m.json",
  },
  {
    id: 7,
    name: "xrp",
    icon: SiXrp,
    title: "XRP",
    color: "var(--googleBlue)",
    description: "Increased by 63%",
    progress: 67,
    src: "https://assets5.lottiefiles.com/packages/lf20_cZg2ZStvee.json",
  },
  {
    id: 8,
    name: "btc",
    icon: FaBitcoin,
    title: "Bitcoin",
    color: "var(--googleBlue)",
    description: "Increased by 5%",
    progress: 50,
    src: "https://assets1.lottiefiles.com/packages/lf20_zy0hqolm.json",
  },
  {
    id: 9,
    name: "eth",
    icon: FaEthereum,
    title: "Ethereum",
    color: "var(--googleBlue)",
    description: "Increased by 9%",
    progress: 69,
    src: "https://assets3.lottiefiles.com/packages/lf20_icohf8fe.json",
  },
  {
    id: 10,
    name: "doge",
    icon: SiDogecoin,
    title: "Dogecoin",
    color: "var(--googleBlue)",
    description: "Increased by 12%",
    progress: 32,
    src: "https://assets7.lottiefiles.com/packages/lf20_lrdzrr4m.json",
  },
  {
    id: 11,
    name: "xrp",
    icon: SiXrp,
    title: "XRP",
    color: "var(--googleBlue)",
    description: "Increased by 63%",
    progress: 67,
    src: "https://assets5.lottiefiles.com/packages/lf20_cZg2ZStvee.json",
  },
  {
    id: 12,
    name: "btc",
    icon: FaBitcoin,
    title: "Bitcoin",
    color: "var(--googleBlue)",
    description: "Increased by 5%",
    progress: 50,
    src: "https://assets1.lottiefiles.com/packages/lf20_zy0hqolm.json",
  },
];

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeCoinInformation, setActiveCoinInformation] = useState(null);

  const getCryptoInformation = async (item: any) => {
    const data = await fetchData(item.name);
    setActiveCoinInformation({ ...item, data });
    console.log({ ...item, data });
  };

  return (
    <div className="dashboard-container">
      <div className="container left-container">
        <div className="title">Bitcoins</div>
        <div className="learning-card-container">
          {coins.map((item, index) => (
            <LearningCard
              active={activeIndex}
              key={index}
              title={item.title}
              icon={item.icon}
              color={item.color}
              description={item.description}
              progress={item.progress}
              onClick={() => {
                setActiveIndex(index);
                getCryptoInformation(item);
              }}
            />
          ))}
        </div>
      </div>
      <div className="container right-container">
        {activeCoinInformation && (
          <div className="crypto-information-container">
            <Player
              autoplay
              loop
              src={activeCoinInformation.src}
              style={{ height: "300px", width: "300px" }}
            />
            <div className="title">{activeCoinInformation.title}</div>
            <div
              className="asd"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="bruh"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="description">
                  {activeCoinInformation.description}
                </div>
                <div className="description">
                  Ask Price: {activeCoinInformation.data.askPrice}
                </div>
                <div className="description">
                  Bid Price: {activeCoinInformation.data.bidPrice}
                </div>
                <div className="description">
                  High Price: {activeCoinInformation.data.highPrice}
                </div>
              </div>

              <div
                className="bruh"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="description">
                  Low Price: {activeCoinInformation.data.lowPrice}
                </div>
                <div className="description">
                  Open Price: {activeCoinInformation.data.openPrice}
                </div>
                <div className="description">
                  Quote Asset: {activeCoinInformation.data.quoteAsset}
                </div>
                <div className="description">
                  Volume: {activeCoinInformation.data.volume}
                </div>
              </div>
            </div>
            <div
              className="buttons"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 50,
                marginTop: 20,
              }}
            >
              <div className="button">Buy</div>
              <div className="button">Sell</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
