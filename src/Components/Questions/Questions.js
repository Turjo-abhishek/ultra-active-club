import React from "react";

const Questions = () => {
  return (
    <div  className="px-5">
      <div className="bg-primary bg-opacity-10 my-2 px-3 py-3 rounded">
        <h3 className="text-start">How does React work?</h3>
        <p className="text-start">
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props.
        </p>
      </div>
      <div className="bg-warning bg-opacity-25 my-2 px-3 py-3 rounded">
        <h3 className="text-start">What are the differences between state and props?</h3>
        <p className="text-start">
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components. The "setState" property is used to
          update the state values in the component.
        </p>
      </div>
      <div className="bg-danger bg-opacity-25 my-2 px-3 py-3 rounded">
        <h3 className="text-start">What are the functions of useEffect other than loading data?</h3>
        <p className="text-start">
          The useEffect Hook allows us to perform side effects in our
          components. Some examples of side effects are: fetching data, directly
          updating the DOM, setting intervals or setting timeout etc. useEffect accepts two arguments. The second argument is optional.
        </p>
      </div>
    </div>
  );
};

export default Questions;
