import chart from "../assets/Chart.svg";
import table from "../assets/Table.svg";
import stats from "../assets/Stats.svg";

import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="bg-secondary  ">
      <h2 className="max-w-[740px] mx-auto text-center pt-16">
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
            <motion.object
              data={chart}
              type="image/svg+xml"
              className="w-full"
              initial={{
                opacity: 0,
                x: "100%",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            ></motion.object>
          </div>
        </div>
      </section>

      <section>
        <div className="layout lg:flex-row-reverse">
          <div className="content lg:w-[550px]">
            <h3>Detailed Statistics</h3>
            <p>
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <a href="#" className="blue-btn">
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-2/3 relative lg:right-12">
            <motion.object
              data={stats}
              type="image/svg+xml"
              className="w-full"
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            ></motion.object>
          </div>
        </div>
      </section>

      <section>
        <div className="layout">
          <div className="content lg:w-[550px]">
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
            <motion.object
              data={table}
              type="image/svg+xml"
              className="w-full relative lg:left-12"
              initial={{
                opacity: 0,
                x: "100%",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            ></motion.object>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
