const FacebookIcon = ({ color = "#A3A2A2", size = "20" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6117 22.3693V13.0786H16.6135L17.0639 9.45674H13.6117V7.14473C13.6117 6.09646 13.8909 5.38207 15.3401 5.38207L17.1854 5.38129V2.1418C16.8663 2.09874 15.7708 2 14.4959 2C11.8336 2 10.0109 3.68756 10.0109 6.78603V9.45674H7V13.0786H10.0109V22.3693H13.6117Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;
