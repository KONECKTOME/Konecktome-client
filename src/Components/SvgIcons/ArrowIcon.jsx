const ArrowIcon = ({ color = "#A3A2A2", size = "20", position = "down" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      transform={
        position === "up"
          ? "rotate(180)"
          : position === "left"
          ? "rotate(90)"
          : position === "right"
          ? "rotate(270)"
          : "rotate(0)"
      }
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.61335 7.27166L3 8.88501L12.115 18L21.23 8.88501L19.6166 7.27166L12.115 14.7733L4.61335 7.27166Z" />
    </svg>
  );
};

export default ArrowIcon;
