import React from "react";
import LoaderRaw from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: "#f8f8f8ad",
          zIndex: 99999999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoaderRaw type="TailSpin" />
      </div>
    </div>
  );
};

export default Loader;
