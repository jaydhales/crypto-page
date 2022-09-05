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

  return (
    <section className="bg-light text-primary trans pb-24">
      <h2
        className="max-w-[740px]
      mx-auto text-center mt-24"
      >
        Trade securely and market the high growth cryptocurrencies.
      </h2>

      <div className="layout justify-between">
        {data.map(({ logo, coin, abbr, details }) => (
          <div className="group hover:bg-secondary grid gap-4 text-center place-items-center max-w-[370px] px-6 py-12 m-4 rounded-2xl">
            <object data={logo} type="image/svg+xml"></object>
            <h3 className="font-bold group-hover:text-light">
              {coin} <span className="text-body-md font-normal">{abbr}</span>
            </h3>
            <p className="group-hover:text-light">{details}</p>

            <a className="group-hover:blue-btn pr-4 flex items-center">
              <p className="hidden group-hover:block">Start mining</p>
              <span
                className=" bg-light text-accent text-[24px] group-hover:text-[12px] rounded-full grid place-items-center w-16 h-16 group-hover:w-8 group-hover:h-8 ml-4 border-2
              "
              >
                <i className="fas fa-chevron-right" />
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cryptos;
