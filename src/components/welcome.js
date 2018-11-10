import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [message, setMessage] = useState("def");
  useEffect(() => {
    fetch("http://localhost:5001/feriebilder-b8e02/us-central1/helloWorld")
      .then(response => response.text())
      .then(text => setMessage(text));
  }, []);
  return (
    <>
      <h1>Welcome!</h1>
      <pre>{JSON.stringify(message, null, 2)}</pre>
    </>
  );
};

export default Welcome;
