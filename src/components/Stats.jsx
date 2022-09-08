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
    <section className="layout gap-7 lg:justify-between">
      {data.map(({ value, detail, imageSource }) => (
        <div key={value} className="flex gap-4 ">
          <object data={imageSource} type="image/svg+xml"></object>
          <div>
            <h2>{value}</h2>
            <p className="w-[210px] text-[14px] sm:text-body-sm">{detail}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
