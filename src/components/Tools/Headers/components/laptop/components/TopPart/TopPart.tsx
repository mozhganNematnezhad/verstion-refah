//base
import { FC } from "react";
import Link from "next/link";

//components
import { AuthBtn } from "./components/AuthBtn/AuthBtn";

//assets
import zenovaLogo from "assets/image/logo/zenova.png";
import { CartBtn } from "./components/CartBtn/CartBtn";
import { FullImage } from "@/components/common/images/FullImage/FullImage";
import { SearchHeder } from "@/components/shared/SearchHeder/SearchHeder";

const TopPart: FC = () => {
  return (
    <section className="container mx-auto px-14 py-4 flex  justify-between items-center gap-2">
      <Link href="/" className="block ">
        <FullImage
          src={zenovaLogo.src}
          alt="شهرک رفا ۲۴"
          width={
            typeof window !== "undefined" && window.innerWidth < 450
              ? "60px"
              : "70px"
          }
          objectFit="contain"
        />
      </Link>

      <SearchHeder />

      <section className="flex justify-between items-center gap-7">
        <AuthBtn />
        <CartBtn />
      </section>
    </section>
  );
};

export { TopPart };
