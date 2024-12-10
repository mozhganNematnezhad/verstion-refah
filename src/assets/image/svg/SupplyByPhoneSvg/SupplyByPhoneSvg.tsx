//base
import { FC } from "react";

interface SupplyByPhoneProps {
  size: number;
}

const SupplyByPhoneSvg: FC<SupplyByPhoneProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 207 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M175.871 174.05C166.804 164.898 157.514 155.62 148.252 146.468C142.78 141.06 138.057 140.807 131.948 145.592C128.669 148.155 125.313 150.737 122.069 153.237C120.59 154.375 119.111 155.513 117.633 156.651L117.204 156.986L116.762 156.67C116.601 156.553 116.455 156.456 116.324 156.369C116.052 156.189 115.818 156.028 115.599 155.814C109.436 149.658 103.278 143.496 97.1156 137.335C82.8296 123.057 68.5484 108.78 54.2478 94.5166C52.7448 93.014 52.6767 91.6621 54.0192 89.9941C57.9932 85.0679 61.5294 80.5453 64.8225 76.1686C68.349 71.4759 67.9598 66.1704 63.7767 61.9785C53.7906 51.9657 44.7773 42.9351 35.5695 33.7928C33.4147 31.653 30.7296 30.4957 27.9522 30.4957C27.7577 30.4957 27.5582 30.5005 27.3637 30.5151C24.5619 30.6805 22.0082 32.047 20.1744 34.3617C14.8239 41.1067 9.17173 48.3962 4.05951 56.0116C-2.48277 65.7668 -0.989473 79.0524 7.61521 87.5966C20.5393 100.435 32.972 112.865 47.8806 127.779C56.9134 136.815 65.9412 145.86 74.9691 154.9C90.4468 170.403 106.45 186.432 122.215 202.168C130.381 210.318 143.583 211.802 152.917 205.611C160.953 200.291 168.657 194.266 175.253 189.033C177.481 187.268 178.794 184.768 178.965 181.997C179.135 179.103 178.011 176.21 175.871 174.05ZM23.9442 38.7579C25.5104 37.0364 27.495 35.4851 30.3648 37.0121C31.1334 37.4254 31.7463 38.0479 32.3397 38.6509L32.6364 38.9475C37.6659 43.971 42.6955 48.9993 47.725 54.0276C51.1056 57.4073 54.4861 60.7871 57.8667 64.1669C62.5266 68.8256 62.4196 70.8145 57.2344 76.0179L56.7042 76.5528L56.1886 75.9985C55.2401 74.9918 54.2964 73.9706 53.3528 72.9542C51.3196 70.7562 49.2134 68.4852 47.078 66.3211C39.5678 58.7203 31.8776 51.0514 24.6397 43.8494L24.4549 43.6646C23.2875 42.5121 21.8331 41.0775 23.9442 38.7579ZM162.154 191.776C160.379 192.924 158.715 194.28 156.954 195.715C153.301 198.701 149.522 201.789 144.492 203.019C142.79 203.432 141.122 203.642 139.502 203.642C134.511 203.642 129.949 201.682 126.111 197.85C112.311 184.068 98.2975 170.034 84.746 156.461C74.6189 146.317 64.4917 136.173 54.3597 126.038C39.3781 111.056 25.8412 97.5317 11.8957 83.75C4.76968 76.7036 3.78712 66.1753 9.49763 58.1465C11.346 55.5497 13.2187 53.0647 15.1984 50.4338C16.0886 49.2521 16.9836 48.0656 17.8786 46.8596L18.3844 46.1836L53.489 81.3428L53.0901 81.8535C52.5162 82.5829 51.9276 83.3269 51.3293 84.0807C49.9868 85.7827 48.5957 87.5383 47.2337 89.3084C44.7287 92.5569 44.7724 93.262 47.6909 96.1749C61.0917 109.553 74.4973 122.931 87.9029 136.309L107.69 156.053C108.989 157.346 110.283 158.649 111.577 159.948L113.6 161.976C116.071 164.451 117.005 164.5 119.841 162.306L127.872 156.092L162.913 191.29L162.154 191.776ZM173.157 181.992C172.952 183.538 171.693 184.875 168.944 186.466L168.458 186.748L133.743 152.026L134.19 151.511C136.238 149.171 137.804 148.15 139.419 148.092C141.029 148.034 142.668 148.953 144.862 151.146L156.857 163.138C161.264 167.549 165.671 171.959 170.083 176.365C172.447 178.729 173.366 180.411 173.157 181.992Z"
        fill="#1156C7"
      />
      <path
        d="M184.549 86.6775C183.59 72.818 182.52 58.73 181.484 45.1089L181.353 43.3485C181.149 40.7079 180.283 39.8715 177.642 39.7791C176.036 39.7256 174.392 39.7353 172.802 39.7499C172.111 39.7547 171.42 39.7596 170.725 39.7596H170.695C168.409 39.7596 167.266 39.7596 166.537 39.0302C165.822 38.3105 165.822 37.2066 165.831 35.0134V34.5951C165.836 33.2724 165.841 31.9059 165.768 30.5783C165.423 24.2905 160.807 19.1358 154.284 17.7547C148.136 16.4514 141.71 19.588 139.336 25.0491C138.325 27.3736 137.731 30.2622 137.576 33.6469C137.541 34.3277 137.522 34.9258 137.507 35.4462C137.376 39.3317 137.225 39.8228 133.572 39.7596C132.945 39.745 132.167 39.7353 131.242 39.7499C130.435 39.7645 129.623 39.7596 128.815 39.7547C127.964 39.7547 127.084 39.7499 126.227 39.7694C123.08 39.8326 122.161 40.6787 121.947 43.7083L121.65 47.8759C120.755 60.5342 119.826 73.6204 119.048 86.5024C118.844 89.8968 119.744 92.7659 121.645 94.7938C123.615 96.8946 126.573 98.0131 130.187 98.0277C135.148 98.0423 140.105 98.0374 145.066 98.0374C147.255 98.0325 149.444 98.0325 151.633 98.0325H152.363V98.1347C154.352 98.1347 156.337 98.1395 158.321 98.1444C163.341 98.159 168.536 98.1736 173.638 98.1201C176.815 98.086 179.704 96.8265 181.786 94.5798C183.77 92.4255 184.753 89.6196 184.549 86.6775ZM143.743 31.478C144.04 26.6393 147.138 23.6778 151.808 23.7021C156.239 23.741 159.61 27.077 159.814 31.6336C159.99 35.4754 160.077 37.4059 158.968 38.5682C157.83 39.7547 155.874 39.7547 151.594 39.7547H151.38C147.518 39.7547 145.562 39.7353 144.478 38.5828C143.378 37.4108 143.5 35.4267 143.743 31.478ZM177.179 90.422C176.328 91.3314 174.991 91.735 172.709 91.7642C167.665 91.8274 162.538 91.8079 157.582 91.7933C154.138 91.7836 150.577 91.769 147.075 91.7885C144.614 91.7982 142.104 91.8469 139.677 91.9003C136.924 91.9538 134.088 92.0122 131.281 92.0122H130.625C128.679 92.0073 127.22 91.487 126.286 90.4755C125.294 89.4008 124.895 87.8349 125.06 85.6806C125.897 74.7632 126.753 63.1262 127.677 50.1031C127.959 46.1398 128.392 45.7362 132.366 45.7848C133.324 45.7994 134.278 45.8772 135.294 45.9599C135.776 45.9988 136.282 46.0377 136.817 46.0766L137.498 46.1204V46.8012C137.498 47.4917 137.493 48.1677 137.493 48.8291C137.483 50.2831 137.478 51.6544 137.503 53.0355C137.541 55.4816 138.65 56.9696 140.465 57.0183H140.548C142.323 57.0183 143.432 55.5934 143.51 53.1911C143.748 46.1252 144.103 45.7702 151.098 45.7702H159.819V46.4997C159.819 47.3604 159.814 48.158 159.81 48.9215C159.795 50.5505 159.785 51.9559 159.834 53.3808C159.902 55.6032 161.064 56.994 162.864 57.0134H162.889C164.581 57.0134 165.729 55.5837 165.817 53.3662C165.826 53.0598 165.826 52.7535 165.822 52.4471L165.817 51.9997C165.822 49.15 166.079 47.1756 167.368 46.1496C168.653 45.1186 170.715 45.3083 173.405 45.9113C174.514 46.1593 175.462 47.8613 175.555 48.8874C176.143 55.1558 176.605 61.5408 177.048 67.7168L177.189 69.6669C177.569 74.8897 177.958 80.2924 178.24 85.6125C178.371 88.0878 178.065 89.4786 177.179 90.422Z"
        fill="#1156C7"
      />
      <path
        d="M192.205 9.53674e-06H111.849C103.921 9.53674e-06 97.4707 6.44833 97.4707 14.3701V104.048C97.4707 111.975 103.921 118.418 111.849 118.418H147.158L172.938 153.359V118.418H192.205C200.129 118.418 206.574 111.975 206.574 104.048V14.3701C206.574 6.44833 200.129 9.53674e-06 192.205 9.53674e-06ZM200.25 104.048C200.25 108.488 196.641 112.096 192.205 112.096H166.615V134.14L150.354 112.096H111.849C107.408 112.096 103.794 108.488 103.794 104.048V14.3701C103.794 9.93021 107.408 6.32187 111.849 6.32187H192.205C196.641 6.32187 200.25 9.93021 200.25 14.3701V104.048Z"
        fill="#1156C7"
      />
    </svg>
  );
};

export { SupplyByPhoneSvg };
