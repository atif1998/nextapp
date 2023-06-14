import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header" className="fixed-top bg-white">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="/">
            <Image src="/images/ts-logo.png" alt="" width={100} height={100} />
          </a>
        </h1>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">My Website</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/softwareDevelopment">software Developmen</Link>
              </li>
              <li>
                <Link href="/cyberSecurity">CyberSecurity</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/getstarted">Get Startesd</Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </header>
  );
}
