"use client";

//base
import { FC } from "react";
import Link from "next/link";

//lib
import { Badge } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "@/core/context/GlobalContext";

const CartBtn: FC = () => {
  //auth context
  const { cartCount } = useGlobalContext();

  return (
    <Link href="/cart">
      <Badge count={cartCount} overflowCount={10} color="cyan" offset={[0, 0]}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-sky-700 !text-3xl"
        />
      </Badge>
    </Link>
  );
};

export { CartBtn };
