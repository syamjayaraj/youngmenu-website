"use client";
import imageUrl from "@/utils/generate-image-url";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation({ data }: any) {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(data, "url");

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
      id="navbar"
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src={imageUrl(data?.logo?.data?.attributes?.url)}
            alt="logo-image"
            height={40}
            width={133}
            priority={true}
            className="logo-img"
          />
        </Link>

        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${showMenu ? "show" : ""} collapse navbar-collapse`}>
          <ul className="navbar-nav ms-auto align-items-center">
            {data?.navItem?.map((item: any, index: number) => (
              <li className="nav-item" key={`nav-item-${index}`}>
                <Link
                  className="nav-link"
                  href={item?.url}
                  onClick={() => setShowMenu(false)}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link
                className="github-link"
                href="https://github.com/syamjayaraj/youngmenu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowMenu(false)}
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
