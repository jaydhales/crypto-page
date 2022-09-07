import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Stats from "./components/Stats.jsx";
import WhyCrappo from "./components/WhyCrappo.jsx";
import EarnCalc from "./components/EarnCalc.jsx";
import Cryptos from "./components/Cryptos.jsx";
import Features from "./components/Features.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

const App = () => (
  <div className="App bg-primary text-light font-sans overflow-clip relative bottom-pad">
    <Header />
    <Intro />
    <Stats />
    <WhyCrappo />
    <EarnCalc />
    <Cryptos />
    <Features />
    <Cta />
    <Footer />
  </div>
);

export default App;
