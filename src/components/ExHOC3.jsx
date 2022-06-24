import { useState } from "react";

const ExHOC3 = (WrappedComp, num) => {
    const ExHOC3 = () => {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + num);
    }
    return (
        <>
        <WrappedComp count={count} increment={increment} />
        </>
    );
    };
    return ExHOC3;
};

export default ExHOC3;
