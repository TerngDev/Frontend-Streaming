import Navbar from "./components/Navbar/Navbar";
import HomeContent from "./components/HomeContent/HomeContent";
import Popular from "./components/Popular/popular";
import Benefit from "./components/Benefits/Benefit";
import Question from "./components/Questoins/Question";
import EmailReg from "./components/EmailReg/EmailReg";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <Popular />
      <Benefit />
      <Question />
      <EmailReg />
      <Contact />
    </>
  );
}

export default App;
