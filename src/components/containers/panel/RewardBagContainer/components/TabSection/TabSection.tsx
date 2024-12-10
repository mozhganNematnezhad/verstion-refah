import React, { FC } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "تاریخچه تراکنش ها",
    children: "تاریخچه تراکنش ها",
  },
  {
    key: "2",
    label: "گزارشات برداشت",
    children: "گزارشات برداشت",
  },
];

const TabSection: FC = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
};

export { TabSection };
