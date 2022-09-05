import illustration from "../assets/eth-illustration.svg";
import bgWhy from "../assets/bg-why.svg";

const WhyCrappo = () => {
  return (
    <section className="layout lg:flex-row-reverse">
      <div className="content">
        <h2>Why you should choose CRAPPO</h2>
        <p className="text-gray-200">
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </p>
        <a href="#" className="blue-btn">
          Learn More
        </a>
      </div>
      <object
        data={illustration}
        type="image/svg+xml"
        className="w-full"
      ></object>
      <object
        data={bgWhy}
        type=""
        className="absolute bottom-6 -right-[2vw] -top-1/2 lg:-right-[194px] "
      ></object>
    </section>
  );
};

export default WhyCrappo;
