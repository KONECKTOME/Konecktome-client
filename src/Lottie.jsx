import React, { useState } from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, width, height, props }) {
  const [stopped, setStopped] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}
