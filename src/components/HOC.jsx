const HOC = () => {
  return (
    <>
      <h1>Higher Order Components in React</h1>
      <p>
        A higher-order component is a function that takes a component and
        returns a new component. A higher-order component (HOC) is the advanced
        technique in React.js for reusing a component logic.
      </p>
      <h2>Higher-Order Component Conventions</h2>
      <ul>
        <li>Do not use HOCs inside the render method of a component.</li>
        <li>
          The static methods must be copied over to have access to them. You can
          do this using hoist-non-react-statics package to automatically copy
          all non-React static methods.
        </li>
        <li>
          HOCs does not work for refs as 'Refs' does not pass through as a
          parameter or argument. If you add a ref to an element in the HOC
          component, the ref refers to an instance of the outermost container
          component, not the wrapped component.
        </li>
      </ul>
    </>
  );
};

export default HOC;
