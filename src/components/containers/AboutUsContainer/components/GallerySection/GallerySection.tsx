import { FC } from "react";
import aboutUs_image_01 from "assets/image/pages/aboutus/01.jpg";
import aboutUs_image_02 from "assets/image/pages/aboutus/02.jpeg";

const GallerySection: FC = (): JSX.Element => {
  return (
    <section className="relative lg:mt-20">
      <div className="w-full h-[50%] md:h-full">
        <img
          src={aboutUs_image_01.src}
          alt="رفا ۲۴"
          className="object-cover rounded-lg w-full h-full md:h-[250px] lg:h-[350px] border-4 border-white dark:border-[#00172B]"
        />
      </div>

      <div className="md:absolute md:top-52 md:right-14 w-full h-[50%] md:h-full mt-8 md:mt-0">
        <img
          src={aboutUs_image_02.src}
          alt="شرکت فناوری رفا ۲۴"
          className="object-cover rounded-lg w-full h-full md:h-[250px] lg:h-[350px] border-4 border-white dark:border-[#00172B]"
        />
      </div>
    </section>
  );
};

export { GallerySection };
