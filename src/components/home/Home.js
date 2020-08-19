import React from "react";

const Home = (props) => {
  const openDash = () => {
    props.history.push("/dashboard");
  };

  return (
    <>
      <h1>My Dashboard</h1>
      <button onClick={() => openDash()}>Open Dashboard</button>
    </>
  );
};

export default Home;
