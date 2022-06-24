import ExHOC3 from "./ExHOC3";

const ExHOC1 = (props) => {
    const {count, increment} = props
  
  return (
    <>
      <b>ON Click = {count}</b>
      <button onClick={increment}>Click For Increment</button>
    </>
  );
};

export default ExHOC3(ExHOC1,1);
