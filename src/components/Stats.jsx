import barChart from "../assets/bar-chart.svg";
import personIcon from "../assets/person-icon.svg";
import earthIcon from "../assets/earth-icon.svg";

const Stats = () => {
  const data = [
    {
      value: "$30B",
      detail: "Digital Currency Exchanged",
      imageSource: barChart,
    },
    {
      value: "10M+",
      detail: "Trusted Wallets Investor",
      imageSource: personIcon,
    },
    {
      value: "195",
      detail: "Countries Supported",
      imageSource: earthIcon,
    },
  ];

  return (
    <section className="layout flex gap-7 justify-center lg:justify-between flex-wrap ">
      {data.map(({ value, detail, imageSource }) => (
        <div key={value} className="flex gap-4">
          <object data={imageSource} type=""></object>
          <div>
            <h2>{value}</h2>
            <p className="w-[210px]">{detail}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
