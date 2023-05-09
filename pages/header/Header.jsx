import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.module.css"


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
                <nav id="navbar" className={`navbar ${isOpen ? "navbar-mobile" : ""}`}>
                    <ul>
                        <li>
                            <a className="nav-link scrollto active" href="#hero">
                                Home
                            </a>
                        </li>
                        <li>
                        <Link  className="nav-link scrollto"href="/about">About</Link>
                            
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#softwaredevelopment">
                                Software Development
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#cybersecurity">
                                Cyber Security
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#team">
                                Team
                            </a>
                        </li>
                        {/* <li className="dropdown">
                                <a href="#">
                                    <span>Project</span> <i className="bi bi-chevron-down" />
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Project 1</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">
                                            <span>Project 2</span>{" "}
                                            <i className="bi bi-chevron-right" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Project 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
                        <li>
                            <a className="nav-link scrollto" href="#contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a className="getstarted scrollto" href="#about">
                                Get Started
                            </a>
                        </li>
                    </ul>
                    <i className={`bi text-dark mobile-nav-toggle ${isOpen ? "bi-x" : "bi-list"}`} onClick={toggleMenu} />
                </nav>
            </div>
        </header>


    );
}