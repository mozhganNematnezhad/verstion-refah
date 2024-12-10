import React, { FC } from "react";

interface IPropsTypes {
  color: string;
  size?: number; // Adding optional size prop
}

const UserSvg: FC<IPropsTypes> = ({ color, size = 27 }) => {
  return (
    <div className="flex items-center justify-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size} // Using the size prop to dynamically set the width
        height={size} // Using the size prop to dynamically set the height
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          d="M5.61039 18.1213H15.1025C16.2939 18.1213 17.2598 17.1555 17.2598 15.9641C17.2598 12.4427 12.0823 12.5124 10.3564 12.5124C8.6306 12.5124 3.4531 12.4427 3.4531 15.9641C3.4531 17.1555 4.41895 18.1213 5.61039 18.1213Z"
          stroke={color}
          strokeOpacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3564 9.49208C8.45013 9.49208 6.90476 7.94671 6.90476 6.04041C6.90476 4.13411 8.45013 2.58875 10.3564 2.58875C12.2627 2.58875 13.8081 4.13411 13.8081 6.04041C13.8081 7.94671 12.2627 9.49208 10.3564 9.49208Z"
          stroke={color}
          strokeOpacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { UserSvg };
