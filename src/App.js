import "./components/style.css"
import PureComp from "./components/PureComp";
import ExPureComp from "./components/ExPureComp";
import HOC from "./components/HOC";
import ExHOC1 from "./components/ExHOC1";
import ExHOC2 from "./components/ExHOC2";

function App() {
  return (
    <>
      <PureComp />
      <ExPureComp />
      <HOC />
      <ExHOC1 />
      <ExHOC2 />
    </>
  );
}

export default App;
