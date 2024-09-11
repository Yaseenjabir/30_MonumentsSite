import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MyContext } from "../../../../context-Api/ContextAPI";
import AnimateOnClose from "../../../../framer-motion/AnimateOnClose";
import { useContext } from "react";
import AnimateOnRender from "../../../../framer-motion/AnimateOnRender";

export default function Profile() {
  const { closeAnimation } = useContext(MyContext);

  return (
    <>
      <AnimateOnRender />
      <section className="bg-black min-h-[100vh] text-white pt-[65px] w-full">
        <section className=" px-5 w-full md:px-[90px] lg:px-[200px] xl:px-[250px]">
          <h1
            style={{ fontFamily: "Montserrat" }}
            className="text-[25px] text-center font-semibold sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] mb-10"
          >
            JSON REVOK
          </h1>
          <p className="text-[18px] leading-7 font-light mb-6 md:text-[17px] lg:text-[20px] lg:font-normal lg:leading-9">
            Entirely self-taught, Jason REVOK is known for pushing creative
            boundaries that began in the street. Although his story begins with
            graffiti, the artist has spent the last decade focusing on his
            studio practice and the evolution of process and concept. Refusing
            to be limited by his early recognition, REVOK allows only certain
            elements from graffiti culture to transition to his contemporary
            work—modest materials and industrial tools, ingenuity, his name—but
            his proclivity towards minimalism and post-painterly abstraction has
            become the driving force behind his practice. Examining the question
            of authorship from start to finish, REVOK has developed systematic
            yet imperfect tools to carry out his vision and has created a number
            of unmistakable bodies of work. His bold, balanced, geometry is
            heightened by the personal and imperfect sleight of the human hand.
          </p>
          <p className="text-[18px] leading-7 font-light mb-6 md:text-[17px] lg:text-[20px] ">
            REVOK has exhibited in the Museum of Contemporary Art Los Angeles as
            well as the Pasadena Museum of California Art; in galleries and
            special projects in New York, Los Angeles, Detroit, and Dubai; and
            is in important private collections worldwide.
          </p>
          <p className="font-semibold text-[18px] md:text-[20px] lg:text-[23px]">
            Born in 1977, Riverside,
          </p>
          <p className="font-semibold text-[18px] md:text-[20px] lg:text-[23px]">
            CA Lives and works in Detroit, MI.
          </p>
          <img
            src="https://www.jasonrevok.com/wp-content/uploads/2021/05/05-JasonREVOK-780x624.jpg"
            className="mt-10 w-full"
            loading="lazy"
          />
          <Accordion type="multiple" collapsible>
            <AccordionItem value="item-1" className="mt-10">
              <AccordionTrigger
                style={{ fontFamily: "Montserrat" }}
                className="text-[23px] font-semibold"
              >
                Selected Solo Exibition
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-10 py-10">
                <div className="text-[22px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2022
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      JASON REVOK: The Artist’s Instruments –
                    </span>
                    Museum of Contemporary Art Detroit | Detroit, M
                  </p>
                </div>
                <div className="text-[22px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2021
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Stare into the Abyss –
                    </span>
                    Library Street Collective | Detroit, MI
                  </p>
                </div>
                <div className="text-[22px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2020
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      All Things Must Pass –
                    </span>
                    g gallery | Seoul, Korea
                  </p>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Descending –
                    </span>
                    Dio Horia | Mykonos, Greece
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2019
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      depersonalization-derealization –
                    </span>
                    Library Street Collective | Detroit, MI
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2018
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Installation by Jason REVOK –
                    </span>
                    Arts Brookfield | Los Angeles, CA
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2016
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      SYSTEMS –
                    </span>
                    Library Street Collective | Detroit, MI
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2019
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Systems Cont. –
                    </span>
                    Allouche Gallery | New York, NY
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2015
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      REVOK: Los Angeles –
                    </span>
                    Library Street Collective | Los Angeles, CA
                  </p>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      REVOK –
                    </span>
                    Ruttkowski; 68 | Cologne, DE{" "}
                  </p>
                </div>

                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2012
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      dOrdinary Things –
                    </span>
                    Library Street Collective | Detroit, MI
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger
                style={{ fontFamily: "Montserrat" }}
                className="text-[23px] font-semibold"
              >
                Selected Group Exibition
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-10 py-10">
                <div className="text-[22px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2023
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Beyond the Streets London
                    </span>
                    Curated by Roger Gastman – Saatchi Gallery | London, UK
                  </p>
                </div>
                <div className="text-[22px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2022
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      It Takes a Village –
                    </span>
                    Library Street Collective | Miami Beach, FL
                  </p>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Island Time,
                    </span>
                    Curated by Andrew Schoultz – Volery Gallery | Dubai, UAE
                  </p>
                </div>
                <div className="text-[22px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2021
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      More is More –
                    </span>
                    Akron Museum of Art | Akron, OH
                  </p>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Adolesence –
                    </span>
                    Studio Chromie | Taranto, Italy
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2019
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      depersonalization-derealization –
                    </span>
                    Library Street Collective | Detroit, MI
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2018
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Installation by Jason REVOK –
                    </span>
                    Arts Brookfield | Los Angeles, CA
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2016
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      SYSTEMS –
                    </span>
                    Library Street Collective | Detroit, MI
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2019
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Systems Cont. –
                    </span>
                    Allouche Gallery | New York, NY
                  </p>
                </div>
                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2015
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      REVOK: Los Angeles –
                    </span>
                    Library Street Collective | Los Angeles, CA
                  </p>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      REVOK –
                    </span>
                    Ruttkowski; 68 | Cologne, DE{" "}
                  </p>
                </div>

                <div className="text-[14px]">
                  <h1
                    style={{ fontFamily: "Montserrat" }}
                    className="text-[17px] font-semibold"
                  >
                    2012
                  </h1>
                  <p className="mt-2 tracking-wider leading-7">
                    <span
                      className="font-bold"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      dOrdinary Things –
                    </span>
                    Library Street Collective | Detroit, MI
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </section>
      {closeAnimation && <AnimateOnClose />}
    </>
  );
}
