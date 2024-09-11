import { nanoid } from "nanoid";
import { MyContext } from "../../../../context-Api/ContextAPI";
import AnimateOnClose from "../../../../framer-motion/AnimateOnClose";
import { useContext } from "react";
export default function ReusableComp() {
  const { closeAnimation } = useContext(MyContext);

  const data = [
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2021/01/W9A4195-780x520.jpg",
      title: "_04_2Y_7/21 (2021)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2021/01/REV345-1-780x520.jpeg",
      title: "Shrine_050_XL_B/W/flY_3Lv/Vi_2Rd/Or/Y_5/23 (1/3) (2022-2023))",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2021/01/11-JasonREVOK-780x950.jpg",
      title: "B_1G_12R/Y_2B/R_2R/G_4/21 (2021)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2021/01/IMG_7732_web-780x718.jpg",
      title: "A_58_2R2Bl (2021)",
    },
  ];

  return (
    <>
      <div id="objects" className="fixed top-0 left-0"></div>
      <div id="objects"></div>
      <section className="relative z-10 bg-white w-full">
        <div className="w-full text-center px-5 py-10 max-w-[850px] mx-auto">
          <h1
            className="text-[30px] font-semibold sm:text-[40px] sm:font-bold md:text-[50px] lg:text-[55px] xl:text-[60px] mb-8"
            style={{ fontFamily: "Montserrat" }}
          >
            Objects
          </h1>
          <p className=" leading-7 md:text-lg lg:text-xl font-light sm:font-normal">
            The Object Series is simultaneously futuristic and ancient. From a
            distance the work looks to be machine-made or digital, however, upon
            closer inspection the imperfections of the natural wood material is
            apparent. As a result, the work has a monolithic and spiritual
            energy that defies being placed within a specific contemporary or
            past aesthetic.
          </p>
        </div>
        <div className="w-full">
          {data.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="py-10 px-7 w-full sm:px-20 md:px-[120px] lg:px-[150px] xl:px-[250px]"
                >
                  <img className="w-full" src={item.img} loading="lazy" />
                  <p
                    className="mt-2 text-[14px] text-gray-600"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {item.title}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </section>
      {closeAnimation && <AnimateOnClose />}
    </>
  );
}
