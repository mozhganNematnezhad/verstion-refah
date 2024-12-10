import React, { FC } from "react";
import { Empty } from "antd";
import { ToggleText } from "./ToggleText/ToggleText";
import { FaInfoCircle } from "react-icons/fa";

interface IpropTypes {
  about: string;
  titleBusiness: string;
  description: string;
}

const AboutBusiness: FC<IpropTypes> = ({
  about,
  titleBusiness,
  description,
}) => {
  return (
    <>
      <section className="flex items-center gap-2">
        <FaInfoCircle size={14} className="text-sky-700" />
        <h1 className="text-sky-700 text-lg font-bold">
          درباره ({titleBusiness ? titleBusiness : "!"})
        </h1>
      </section>

      {about ? (
        <section className="mt-3">
          <ToggleText text={about} />
        </section>
      ) : (
        <Empty
          description="کسب و کار ( درباره ما ) از خود ثبت نکرده است"
          className="mt-2"
        />
      )}

      <section className="border-dashed border-t mt-4 pt-2">
        <section className="flex items-center gap-2 pb-2">
          <FaInfoCircle size={14} className="text-sky-700" />
          <h1 className="text-sky-700 text-lg font-bold">
            توضیحات کسب و کار ({titleBusiness ? titleBusiness : "!"})
          </h1>
        </section>

        {description ? (
          <section className="mt-3">
            <ToggleText text={description} />
          </section>
        ) : (
          <Empty
            description="کسب و کار ( توضیحاتی ) از خود ثبت نکرده است"
            className="mt-2"
          />
        )}
      </section>
    </>
  );
};

export { AboutBusiness };
