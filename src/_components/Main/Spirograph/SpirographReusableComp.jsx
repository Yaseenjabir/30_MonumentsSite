import { nanoid } from "nanoid";
import { MyContext } from "../../../../context-Api/ContextAPI";
import { useContext } from "react";
import AnimateOnClose from "../../../../framer-motion/AnimateOnClose";

export default function ReusableComp() {
  const { closeAnimation } = useContext(MyContext);

  const data = [
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/3CFC8395-2D13-4006-BE47-6075A793066C-780x813.jpeg",
      title: "XL_Spiro_Oblong_3ellipse_B/W/Y_5/21 (2021)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/REV331-2-780x520.jpg",
      title: "Spiro_LRG_10/22_FlR/Or/FlY/Lil/Nap (2022)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/05-JasonREVOK-1380x920.jpeg",
      title: "Spirograph_Ellipse_4/20/ 21 /22_Cyan/R/O/Y/W/NAP/BlkR (2022)",
    },
    {
      id: nanoid(),
      img: "https://www.jasonrevok.com/wp-content/uploads/2020/12/REV314-2-780x520.jpeg",
      title: "Spiro_SmAluminium_Everything_5/22_9 (2022)",
    },
  ];

  return (
    <>
      <div id="spirographs" className="fixed top-0 left-0"></div>
      <div id="spirographs"></div>
      <section className="relative z-10 bg-white w-full">
        <div className="w-full text-center px-5 py-10 max-w-[850px] mx-auto">
          <h1
            className="text-[30px] font-semibold sm:text-[40px] sm:font-bold md:text-[50px] lg:text-[55px] xl:text-[60px] mb-8"
            style={{ fontFamily: "Montserrat" }}
          >
            Spirographs
          </h1>
          <p className=" leading-7 md:text-lg lg:text-xl font-light sm:font-normal">
            To create his “Spirograph” series, REVOK has crafted a large-scale,
            machine-like spirograph template out of plywood. The stator is
            fastened to the wall, while the rotor, a smaller gear that holds a
            can of paint, engages within the perimeter as it moves. The works
            attempt to harness imperfections and chaos within this predetermined
            framework, and the number of compositions made possible by combining
            gears of different sizes and shapes is endless.
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
