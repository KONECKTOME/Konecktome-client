const BellIcon = ({ color = "#A3A2A2", size = "20" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRrule="evenodd"
        clipRrule="evenodd"
        d="M19.5325 17.2013V11.2008C19.5325 7.86715 17.2382 5.13359 13.9992 4.33353V3.60013C13.9992 1.46662 10.6927 1.46662 10.6927 3.60013V4.33353C7.52114 5.13359 5.22683 7.86715 5.22683 11.2008V17.2013L3 19.4014V20.4682H10.0854C10.2878 21.6016 11.2325 22.4017 12.3797 22.4017C13.5268 22.4017 14.4716 21.6016 14.674 20.4682H21.7594V19.4014L19.5325 17.2013Z"
        fill={color}
      />
    </svg>
  );
};

export default BellIcon;
