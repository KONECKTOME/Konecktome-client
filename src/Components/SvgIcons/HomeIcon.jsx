const HomeIcon = ({ color = "#A3A2A2", size = "20" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={color} />
    </svg>
  );
};

export default HomeIcon;
