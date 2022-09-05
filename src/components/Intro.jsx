import illustration from "../assets/btc-illustration.svg";
import bgRect from "../assets/bg-rect.svg";

const Intro = () => {
  return (
    <section className="layout">
      <div className="content">
        <div className="flex bg-light w-max bg-opacity-10 rounded-[32px]">
          <p className="font-medium text-primary bg-light px-4 py-1 rounded-[32px]">
            75% SAVE
          </p>
          <p className="px-4 py-1">For the Black Friday weekend</p>
        </div>

        <h1>Fastest & secure platform to invest in crypto</h1>

        <p className="text-gray-200">
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions.
        </p>

        <a className="blue-btn pr-4 flex items-center">
          {" "}
          Try for FREE{" "}
          <span className=" bg-light text-accent text-[12px] rounded-full grid place-items-center w-8 h-8 ml-4">
            <i className="fas fa-chevron-right" />
          </span>
        </a>
      </div>

      <object
        data={bgRect}
        type="image/svg+xml"
        className="absolute -bottom-[194px] -right-[194px] "
      ></object>

      <object
        data={illustration}
        type="image/svg+xml"
        className="w-full z-10"
      ></object>
    </section>
  );
};

export default Intro;
