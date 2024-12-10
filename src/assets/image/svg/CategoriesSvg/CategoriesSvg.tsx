import React, { FC } from "react";
interface IPropsTypes {
  color: string;
}
const CategoriesSvg: FC<IPropsTypes> = ({ color }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
      >
        <path
          d="M6.24375 2.58875C3.76921 2.58875 3.00781 3.35014 3.00781 5.82468C3.00781 8.29922 3.76921 9.06062 6.24375 9.06062C8.71829 9.06062 9.47969 8.29922 9.47969 5.82468C9.47969 3.35014 8.71829 2.58875 6.24375 2.58875Z"
          stroke={color}
          strokeOpacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.24375 11.6494C3.76921 11.6494 3.00781 12.4108 3.00781 14.8853C3.00781 17.3598 3.76921 18.1212 6.24375 18.1212C8.71829 18.1212 9.47969 17.3598 9.47969 14.8853C9.47969 12.4108 8.71829 11.6494 6.24375 11.6494Z"
          stroke={color}
          strokeOpacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3044 11.6494C12.8298 11.6494 12.0684 12.4108 12.0684 14.8853C12.0684 17.3598 12.8298 18.1212 15.3044 18.1212C17.7789 18.1212 18.5403 17.3598 18.5403 14.8853C18.5403 12.4108 17.7789 11.6494 15.3044 11.6494Z"
          stroke={color}
          strokeOpacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3044 2.58875C12.8298 2.58875 12.0684 3.35014 12.0684 5.82468C12.0684 8.29922 12.8298 9.06062 15.3044 9.06062C17.7789 9.06062 18.5403 8.29922 18.5403 5.82468C18.5403 3.35014 17.7789 2.58875 15.3044 2.58875Z"
          stroke={color}
          strokeOpacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { CategoriesSvg };
