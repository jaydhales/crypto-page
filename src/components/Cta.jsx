import eth from "../assets/bg-eth.svg";
import btc from "../assets/bg-btc.svg";
import rect from "../assets/bg-rect.svg";

const Cta = () => {
  return (
    <section className="trans cta px-8 py-20 lg:px-32 overflow-hidden">
      <object
        data={rect}
        type="image/svg+xml"
        className="absolute -bottom-48"
      ></object>
      <div className="layout items-start bg-accent rounded-2xl justify-between p-12 relative">
        <object
          data={eth}
          type="image/svg+xml"
          className="absolute top-0 left-6"
        ></object>
        <object
          data={btc}
          type="image/svg+xml"
          className="absolute bottom-0 right-8"
        ></object>

        <div className="text-center lg:text-left w-full z-10">
          <h3>Start mining now</h3>
          <p className="lg:max-w-[378px] mt-4">
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>

        <div className="md:flex items-center w-full lg:max-w-[500px]z-10">
          <input
            type="text"
            className="bg-accent placeholder:text-light w-full mr-10 pb-4"
            placeholder="Enter your mail"
          />
          <div>
            <a href="#" className="block my-4 blue-btn bg-light text-primary">
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
