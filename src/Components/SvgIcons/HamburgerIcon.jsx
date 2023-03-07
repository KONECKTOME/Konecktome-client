const HamburgerIcon = ({ size = "20",color = "#A3A2A2" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="18.8095"
        height="2.28571"
        rx="1.14286"
      />
      <rect
        x="3"
        y="10.8564"
        width="13.022"
        height="2.28571"
        rx="1.14286"
      />
      <rect
        x="3"
        y="17.7148"
        width="15.9158"
        height="2.28571"
        rx="1.14286"
      />
    </svg>
  );
};

export default HamburgerIcon;
