import { nanoid } from "nanoid";
import { useContext } from "react";
import { MyContext } from "../../../../context-Api/ContextAPI";
import AnimateOnClose from "../../../../framer-motion/AnimateOnClose";

export default function ReusableComp() {
  const { closeAnimation } = useContext(MyContext);

  const data = [
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/REV343-2-780x520.jpeg",
      title: "K_Loop_XL_FlourRed_Blu_FlourYl_8/22 (2022)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/REV334-2-780x1170.jpg",
      title: "K_Loop_A_Sm_FlourRed_Blu_FlourYl_8/22 (2022)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/01-20-21-LSC-REVOK-15_DARK-780x520.jpg",
      title: "KundaliniLoopX3_45_FlouRed/Y/Blu_2A_2021 (2021)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/REV240-1-780x520.jpg",
      title: "KundaliniLoopX3_45_gray_1A (2020)",
    },
  ];

  return (
    <>
      <div id="tapeloops" className="fixed top-0 left-0"></div>
      <div id="tapeloops"></div>
      <section className="relative z-10 bg-white w-full">
        <div className="w-full text-center px-5 py-10 max-w-[850px] mx-auto">
          <h1
            className="text-[30px] font-semibold sm:text-[40px] sm:font-bold md:text-[50px] lg:text-[55px] xl:text-[60px] mb-8"
            style={{ fontFamily: "Montserrat" }}
          >
            Tape Loops
          </h1>
          <p className=" leading-7 md:text-lg lg:text-xl font-light sm:font-normal">
            Jason REVOK’s “Tape Loops” are driven by the work of avant-garde
            composer William Basinski, who in the 1980s set out to digitize easy
            listening tapes, but instead watched his cassettes break apart as
            they moved through the recording spool. He continued documenting
            despite the interference, and created an unprecedented series called
            “The Disintegration Loops.” REVOK creates a similar effect through
            paint—imperfect concentric lines interrupted by diagonal
            composition—built up through the methodological use of a paint
            roller coiled in tape. As the roller spins on the surface of the
            canvas, the tape shifts, tears and falls off, building a series of
            works that vibrate with intensity.
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
