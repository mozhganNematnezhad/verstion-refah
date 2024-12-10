//base
import { FC } from "react";

//components
import { FullImage } from "@/components/common/images/FullImage/FullImage";

//core
import { IAdvertisementprops } from "@/core/types/props/business/Advertisement.props";

interface IPropType {
  advertisementList: IAdvertisementprops[];
  count: number;
  ImageHeight: string;
}

const AdvertisementSection: FC<IPropType> = ({
  advertisementList,
  count,
  ImageHeight,
}): JSX.Element => {
  return (
    <>
      {/* in more 720 */}
      <main
        className="container mx-auto px-4 py-6  grid-cols-5 gap-4 hidden lg:grid"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {advertisementList.map((item, key) => (
          <section key={key}>
            <FullImage
              src={item.image}
              alt={item.alt}
              height={ImageHeight}
              className="rounded-md cursor-pointer"
            />
          </section>
        ))}
      </main>

      {/* in less 720 */}
      <main className="mx-auto p-2 grid-cols-2 grid sm:grid-cols-4   gap-4 lg:hidden ">
        {advertisementList.slice(0, 4).map((item, key) => (
          <section key={key}>
            <FullImage
              src={item.image}
              alt={item.alt}
              className="rounded-md cursor-pointer h-full  "
              objectFit="contain"
            />
          </section>
        ))}
      </main>
    </>
  );
};

export { AdvertisementSection };
