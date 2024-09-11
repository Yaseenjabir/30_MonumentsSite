import { nanoid } from "nanoid";
import { MyContext } from "../../../../context-Api/ContextAPI";
import { useContext } from "react";
import AnimateOnClose from "../../../../framer-motion/AnimateOnClose";

export default function ReusableComp() {
  const { closeAnimation } = useContext(MyContext);

  const data = [
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/REV370-1-780x520.jpeg",
      title: "InstrumentEx/FrameDrag_X3_Vio/Trq/Red/Bl_4/23 (2023) ",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/REV282-780x975.jpg",
      title: "Instrument_Exercise /Frame_drag_Lrg_Alum/Y/O/R_3/22_1 (2022)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/REV335-1-780x520.jpeg",
      title: "InstrumentEx/FrameDrag_3_Blu/Ochre/Vio_6/22 (2022)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/01-JasonREVOK-780x780.jpg",
      title: "Instrument_frame_drag_3 (2019)",
    },
  ];

  return (
    <>
      <div id="instrument" className="fixed top-0 left-0"></div>
      <div id="instrument"></div>
      <section className="relative z-10 bg-white w-full">
        <div className="w-full text-center px-5 py-10 max-w-[850px] mx-auto">
          <h1
            className="text-[30px] font-semibold sm:text-[40px] sm:font-bold md:text-[50px] lg:text-[55px] xl:text-[60px] mb-8"
            style={{ fontFamily: "Montserrat" }}
          >
            Instrument Frame Drags
          </h1>
          <p className=" leading-7 md:text-lg lg:text-xl font-light sm:font-normal">
            In REVOK’s “Instrument Exercise” series, he relies on a self-made
            tool that holds multiple cans of spray paint and allows them to mark
            a surface simultaneously. The device makes a system of lines that
            move in synergy. The results are at once rigorous in their
            machine-like symmetry, and flawed due to the nature of spray paint
            and the human hand.
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
