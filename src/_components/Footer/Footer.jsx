import { FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router";

export default function Footer() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <footer
        className={`w-full ${
          pathname === "/profile"
            ? "bg-black text-white"
            : "bg-white text-black"
        }  z-10 relative pt-[150px] py-12 mx-auto`}
      >
        <div className="w-full flex flex-col px-12 sm:px6 gap-7 md:hidden">
          <FaInstagram className="text-[30px]" />
          <div>
            <h1
              className="tracking-[3px] font-semibold "
              style={{ fontFamily: "sans-serif" }}
            >
              Contact
            </h1>
            <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
              Library Street Collective
            </p>
            <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
              {" "}
              1260 Library St, Detroit, MI 48226
            </p>
            <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
              {" "}
              T 313 600-7443
            </p>
            <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
              {" "}
              E info@lscgallery.com
            </p>
          </div>
          <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
            © 2022 REVOK. All rights reserved.
          </p>
        </div>
        <div className="hidden md:flex md:items-start md:justify-center md:gap-7 lg:gap-16 xl:gap-32">
          <div>
            <FaInstagram className="text-[30px]" />
            <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
              © 2022 REVOK. All rights reserved.
            </p>
          </div>
          <div>
            <h1
              className="tracking-[3px] font-semibold "
              style={{ fontFamily: "sans-serif" }}
            >
              Contact
            </h1>
            <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
              Library Street Collective
            </p>
            <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
              1260 Library St, Detroit, MI 48226
            </p>
          </div>
          <div className="pt-5">
            <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
              T 313 600-7443
            </p>
            <p className="text-sm" style={{ fontFamily: "sans-serif" }}>
              E info@lscgallery.com
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
