import { Ranger } from "@/components/common/Form/Ranger/Ranger";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Services } from "./Tabs/Services/Services";

const AdvanceSearchs = () => {
  const [ShowFilter, setShowFilter] = useState(true);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "نوع خدمات",
      children: <Services />,
    },
    {
      key: "2",
      label: " محدوده درصد تخفیف ",
      children: (
        <Ranger name="RangeDiscount" min={0} max={100} onChange={() => {}} />
      ),
    },
  ];
  return (
    <>
      <section
        className="flex items-center justify-start mt-4"
        onClick={() => setShowFilter(!ShowFilter)}
      >
        <div>
          {ShowFilter ? <MdExpandMore size={30} /> : <MdExpandLess size={30} />}
        </div>
        <div>فیلتر ها</div>
      </section>
      {ShowFilter && (
        <section className=" w-full mt-2 ">
          <Collapse items={items} defaultActiveKey={["1", "2"]} />
        </section>
      )}
    </>
  );
};

export { AdvanceSearchs };
