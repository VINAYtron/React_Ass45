import ExHOC3 from "./ExHOC3";

const ExHOC2 = (props) => {
  const { count, increment } = props;
  return (
    <>
      <b>ON Click = {count}</b>
      <button onMouseOver={increment}>HOVER For Increment</button>
    </>
  );
};

export default ExHOC3(ExHOC2,5);
