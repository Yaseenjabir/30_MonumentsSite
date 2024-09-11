import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router";
import { MyContext } from "../../../context-Api/ContextAPI";
export default function Header() {
  const { setCloseAnimation } = useContext(MyContext);

  const location = useLocation();
  const { pathname } = location;

  const [top, setTop] = useState("top-[-120%]");
  const [direction, setDirection] = useState("down");
  const [visibility, setVisibility] = useState("opacity-1");

  const handleClick = () => {
    if (direction === "down") {
      setTop("top-[0%]");
      setVisibility("opacity-1");
      setDirection("up");
    } else {
      setTop("top-[100%]");
      setDirection("down");
      setVisibility("opacity-0");
    }
  };

  useEffect(() => {
    if (top === "top-[100%]") {
      setTimeout(() => {
        setTop("top-[-120%]");
        setVisibility("opacity-0");
      }, 1000);
    }
  }, [top]);

  const navLinks = [
    { name: "Spirographs", link: "/spirographs" },
    { name: "Instrument Frame Drags", link: "/Instrument-frame-drags" },
    { name: "Tape Loops", link: "/tape-loops" },
    { name: "Self Portrait", link: "/self-portrait" },
    { name: "Objects", link: "/objects" },
  ];

  const boldNavLin = [
    { name: "Profile", link: "/profile" },
    { name: "Work", link: "/" },
  ];

  const [animateIndex, setAnimateIndex] = useState(null);

  const [boldAnimateIndex, setBoldAnimateIndex] = useState(null);

  const navigate = useNavigate();

  const handleNavigation = (link) => {
    setCloseAnimation(true);
    setTop("top-[-120%]");
    setDirection("down");
    setVisibility("opacity-1");
    setTimeout(() => {
      navigate(link);
      setCloseAnimation(false);
    }, 2500);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="w-7 flex fixed right-5 z-50 top-5 flex-col gap-[7px] before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:left-0 before:cursor-pointer"
      >
        <hr
          className={`border  ${
            pathname === "/profile" ? "border-white" : "border-black"
          }`}
        />
        <hr
          className={`border  ${
            pathname === "/profile" ? "border-white" : "border-black"
          }`}
        />
        <hr
          className={`border  ${
            pathname === "/profile" ? "border-white" : "border-black"
          }`}
        />
      </div>
      <div
        className={`w-full bg-white fixed flex ${visibility} flex-col items-center justify-center left-0 transition-all ease-in-out duration-1000 ${top} z-50  h-[100vh]`}
      >
        <ul className="text-center flex flex-col items-center justify-center">
          {boldNavLin.map((item, index) => {
            return (
              <>
                <li
                  onClick={() => {
                    setTop("top-[-120%]");
                    setDirection("down");
                    setVisibility("opacity-1");
                    navigate(item.link);
                  }}
                  onMouseEnter={() => setBoldAnimateIndex(index)}
                  onMouseLeave={() => setBoldAnimateIndex(null)}
                  style={{ fontFamily: "Montserrat", fontWeight: 600 }}
                  className="text-2xl mb-2 max-w-min text-nowrap cursor-pointer"
                >
                  {item.name}
                  <div
                    className={`h-[1px] bg-black ${
                      boldAnimateIndex === index ? "w-full" : "w-0"
                    } mt-[2px] transition-all ease-in-out duration-500`}
                  ></div>
                </li>
              </>
            );
          })}

          {navLinks.map((item, index) => {
            return (
              <>
                <li
                  onClick={() => handleNavigation(item.link)}
                  style={{ fontFamily: "sans-serif" }}
                  key={index}
                  onMouseLeave={() => setAnimateIndex(null)}
                  onMouseEnter={() => setAnimateIndex(index)}
                  className="text-xl font-light my-1 cursor-pointer max-w-min text-nowrap"
                >
                  {item.name}
                  <div
                    className={`h-[1px] bg-black ${
                      animateIndex === index ? "w-full" : "w-0"
                    } mt-[2px] transition-all ease-in-out duration-500`}
                  ></div>
                </li>
              </>
            );
          })}
        </ul>
        <motion.div
          onClick={handleClick}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.5 }}
          transition={{ duration: 0.1 }}
          className="absolute top-5 right-5 cursor-pointer flex items-center justify-center"
        >
          <RxCross2 className="w-8 h-8 duration-300 ease-in-out transition-all" />
        </motion.div>
      </div>
    </>
  );
}
