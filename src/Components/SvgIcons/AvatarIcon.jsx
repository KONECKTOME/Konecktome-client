const AvatarIcon = ({ color = "#A3A2A2", size = "20" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3334 12.3052C15.293 12.3052 17.6923 9.99831 17.6923 7.1526C17.6923 4.3069 15.293 2 12.3334 2C9.37384 2 6.97461 4.3069 6.97461 7.1526C6.97461 9.99831 9.37384 12.3052 12.3334 12.3052Z"
        fill={color}
      />
      <path
        d="M14.7614 13.8203H9.90564C6.6466 13.8203 4 16.3651 4 19.4987V22.0014H20.667V19.4777C20.667 16.344 18.0204 13.8203 14.7614 13.8203Z"
        fill={color}
      />
    </svg>
  );
};

export default AvatarIcon;

