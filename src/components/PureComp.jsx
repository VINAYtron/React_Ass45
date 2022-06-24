const PureComp = () => {

    return (
      <>
        <h1>Pure Components in React</h1>
        <p>
          Pure Components in React are the components which do not re-renders
          when the value of state and props has been updated with the same
          values. If the value of the previous state or props and the new state
          or props is the same, the component is not re-rendered. Pure
          Components restricts the re-rendering ensuring the higher performance
          of the Component
        </p>
        <h3>Features of React Pure Components</h3>
        <ul>
          <li>
            Prevents re-rendering of Component if props or state is the same
          </li>
          <li>Takes care of “shouldComponentUpdate” implicitly</li>
          <li>State and Props are Shallow Compared</li>
          <li>Pure Components are more performant in certain cases</li>
        </ul>
      </>
    );
}

export default PureComp;