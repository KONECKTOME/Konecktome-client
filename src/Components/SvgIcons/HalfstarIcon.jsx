const HalfstarIcon = ({ color = "#A3A2A2", size = "20" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8.125V15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
        fill={color}
      />
    </svg>
  );
};

export default HalfstarIcon;