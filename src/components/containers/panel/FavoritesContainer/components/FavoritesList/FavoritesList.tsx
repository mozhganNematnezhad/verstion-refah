import React, { FC } from "react";
import { Empty } from "antd";

const FavoritesList: FC = () => {
  return (
    <section className="mt-10 py-10">
      <Empty description="شما هنوز محصولی را به علاقه مندی های خود اضافه نکرده اید!" />
    </section>
  );
};

export { FavoritesList };
