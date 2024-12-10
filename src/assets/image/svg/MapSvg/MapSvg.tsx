import React, { FC } from "react";
interface IPropsTypes {
  color: string;
}
const MapSvg: FC<IPropsTypes> = ({ color }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          d="M7.76539 4.31458L4.85948 3.34594C3.74195 2.97343 2.58789 3.80523 2.58789 4.98321V15.1515C2.58789 15.8944 3.06324 16.5539 3.76797 16.7888L7.76539 18.1212M7.76539 4.31458L12.9429 2.58875M7.76539 4.31458V18.1212M12.9429 2.58875L16.9403 3.92122C17.645 4.15613 18.1204 4.81564 18.1204 5.55849V15.7268C18.1204 16.9048 16.9663 17.7366 15.8488 17.364L12.9429 16.3954M12.9429 2.58875V16.3954M12.9429 16.3954L7.76539 18.1212"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { MapSvg };
