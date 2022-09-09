import { useState } from "react";
import btcLogo from "../assets/btc-icon.svg";
import ethLogo from "../assets/eth-icon.svg";
import ltcLogo from "../assets/ltc-icon.svg";

const Cryptos = () => {
  const data = [
    {
      logo: btcLogo,
      coin: "Bitcoin",
      abbr: "BTC",
      details:
        "Digital currency in which a record of transactions is maintained.",
    },
    {
      logo: ethLogo,
      coin: "Ethereum",
      abbr: "ETH",
      details:
        "Blockchain technology to create and run decentralized digital applications.",
    },
    {
      logo: ltcLogo,
      coin: "Litecoin",
      abbr: "LTC",
      details:
        "Cryptocurrency that enables instant payments to anyone in the world.",
    },
  ];

  const [focus, setFocus] = useState("");

  const handleFocus = (e, coin) => {
    setFocus(coin);
  };

  return (
    <section className="bg-light text-primary pt-16 md:pt-[254px]">
      <h2
        className="max-w-[740px]
      mx-auto text-center "
      >
        Trade securely and market the high growth cryptocurrencies.
      </h2>

      <div className="layout justify-between ">
        {data.map(({ logo, coin, abbr, details }) => (
          <div className={focus === coin ? "active" : ""} key={coin}>
            <div
              className="grid card gap-4 text-center place-items-center max-w-[370px] px-6 py-12 m-4 rounded-2xl transition-all duration-1000"
              onClick={(e) => handleFocus(e, coin)}
              id={coin}
            >
              <object data={logo} type="image/svg+xml"></object>
              <h3 className="font-bold ">
                {coin} <span className="text-body-md font-normal">{abbr}</span>
              </h3>
              <p className="">{details}</p>

              <a className="pr-4 flex items-center">
                <p className="transition ease-linear duration-1000 w-0 invisible">Start mining</p>
                <span
                  className="icon bg-light text-accent text-[24px] rounded-full grid place-items-center w-16 h-16 ml-4 border-2
              "
                >
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cryptos;
