import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { MyContext } from "../../../../context-Api/ContextAPI";
import AnimateOnClose from "../../../../framer-motion/AnimateOnClose";

export default function ReusableComp() {
  const { closeAnimation } = useContext(MyContext);

  const data = [
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2021/01/REV356-1-780x520.jpg",
      title: "SelfPortrait_D_2/21_9/22(2022) ",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2021/01/REV349-2-2-780x1170.jpg",
      title: "SelfPortrait_B_2/21_9/22 (2022)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2021/01/11-JasonREVOK-780x950.jpg",
      title: "Self portrait(one month in Chatham) 1 (2018)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2021/01/JasonREVOK_LSC_2019Spring20180906-SELFIEJASONREVOK_AKE2598-780x975.jpg",
      title: "Self_Portrait_2018_small_B (2019)",
    },
  ];

  return (
    <>
      <div id="selfportrait" className="fixed top-0 left-0"></div>
      <div id="selfportrait"></div>
      <section className="relative z-10 bg-white w-full">
        <div className="w-full text-center px-5 py-10 max-w-[850px] mx-auto">
          <h1
            className="text-[30px] font-semibold sm:text-[40px] sm:font-bold md:text-[50px] lg:text-[55px] xl:text-[60px] mb-8"
            style={{ fontFamily: "Montserrat" }}
          >
            Self Portrait
          </h1>
          <p className=" leading-7 md:text-lg lg:text-xl font-light sm:font-normal">
            The “Self Portraits” are born from REVOK’s daily studio practice.
            After working for a few months’ to a year’s time, he gathers the
            drop cloths across his studio floor—an accumulation of excess paint,
            sawdust and other material over the long exposure of time—and
            affixes them to canvases. Folding the canvases to fit their frames,
            he constructs unconventionally compelling dimensionalities. The
            series is a glimpse into REVOK’s studio life throughout a prolonged
            period of time, each surface an intimate reflection of the artist
            and his practice.
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
