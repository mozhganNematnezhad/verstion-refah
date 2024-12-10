import React, { FC } from "react";
import { Empty } from "antd";

const BankCardList: FC = () => {
  return (
    <section className="mt-10 py-10">
      <Empty description="شما هنوز عضو کارت بانکی ثبت نکرده اید!" />
    </section>
  );
};

export { BankCardList };
