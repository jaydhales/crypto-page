import illustration from "../assets/eth-illustration.svg";
import bgWhy from "../assets/bg-why.svg";
import { motion } from "framer-motion";

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
      <div className="w-full">
        <motion.object
          data={illustration}
          type="image/svg+xml"
          className="w-full lg:w-auto"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            delay: 0.5,
          }}
        ></motion.object>
      </div>

      <object
        data={bgWhy}
        type=""
        className="hidden lg:block  absolute bottom-1/4 -right-[10%] "
      ></object>
    </section>
  );
};

export default WhyCrappo;
