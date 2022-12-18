const LinkedinIcon = ({ color = "#A3A2A2", size = "20" }) => {
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
        d="M21.9949 22.2721V22.2713H21.9999V14.8364C21.9999 11.1993 21.2274 8.39746 17.0325 8.39746C15.0158 8.39746 13.6625 9.51919 13.11 10.5826H13.0517V8.73702H9.07422V22.2713H13.2158V15.5696C13.2158 13.8051 13.5458 12.0988 15.7017 12.0988C17.8258 12.0988 17.8575 14.1126 17.8575 15.6828V22.2721H21.9949Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.32617 8.73828H6.4728V22.2726H2.32617V8.73828Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.40164 2C3.07582 2 2 3.09048 2 4.43436C2 5.77825 3.07582 6.89153 4.40164 6.89153C5.72746 6.89153 6.80329 5.77825 6.80329 4.43436C6.80245 3.09048 5.72663 2 4.40164 2Z"
        fill={color}
      />
    </svg>
  );
};

export default LinkedinIcon;