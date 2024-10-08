"use client";
import imageUrl from "@/utils/generate-image-url";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Navigation({ data }: any) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-white fixed-top navbar-custom sticky sticky-light"
      id="navbar"
    >
      <div className="container">
        <Link className="navbar-brand logo text-uppercase" href="/">
          <Image
            src={imageUrl(data?.logo?.data?.attributes?.url)}
            className="logo-dark"
            alt="logo-image"
            height={40}
            width={133}
            priority={true}
          />
          <Image
            src={imageUrl(data?.logo?.data?.attributes?.url)}
            className="logo-light"
            alt="logo-image"
            height={40}
            width={133}
            priority={true}
          />
        </Link>

        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="mdi mdi-menu"></span>
        </button>

        <div className={`${showMenu ? "" : "collapse"} navbar-collapse`}>
          <ul className="navbar-nav ms-auto" id="navbar-navlist">
            {data?.navItem?.map((item: any, index: number) => {
              return (
                <li className="nav-item" key={"nav-item" + index}>
                  <Link
                    className="nav-link"
                    href={item?.url}
                    scroll={true}
                    onClick={() => setShowMenu(false)}
                  >
                    {item?.name}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <Link
                className="nav-link"
                href="https://github.com/syamjayaraj/youngmenu"
                scroll={true}
                target="_blank"
              >
                <i className="mdi mdi-github" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
