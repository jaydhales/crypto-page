import chart from "../assets/Chart.svg";
import table from "../assets/Table.svg";
import stats from "../assets/Stats.svg";

const Features = () => {
  return (
    <div className="bg-secondary trans ">
      <h2 className="max-w-[740px] mx-auto text-center">
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h2>

      <section>
        <div className="layout">
          <div className="content">
            <h3>Invest Smart</h3>
            <p>
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.{" "}
            </p>
            <a href="#" className="blue-btn">
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-2/3">
            <object
              data={chart}
              type="image/svg+xml"
              className="w-full"
            ></object>
          </div>
        </div>
      </section>

      <section>
        <div className="layout lg:flex-row-reverse ">
          <div className="content">
            <h3>Grow your profit and track your investments</h3>
            <p>
              Use advanced analytical tools. Clear Trading View charts let you
              track current and historical profit investments.
            </p>
            <a href="#" className="blue-btn">
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-2/3">
            <object
              data={stats}
              type="image/svg+xml"
              className="w-full"
            ></object>
          </div>
        </div>
      </section>

      <section>
        <div className="layout">
          <div className="content">
            <h3>Grow your profit and track your investments</h3>
            <p>
              Use advanced analytical tools. Clear Trading View charts let you
              track current and historical profit investments.
            </p>
            <a href="#" className="blue-btn">
              Learn More
            </a>
          </div>

          <div className="w-full">
            <object
              data={table}
              type="image/svg+xml"
              className="w-full"
            ></object>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
