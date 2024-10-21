// app/components/Navbar.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faShoppingCart, faInfoCircle, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    const currentPath = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const linkClasses = (path) =>
        `mr-10 hover:text-gray-700 font-bold ${currentPath === path ? 'text-yellow-500' : 'text-black'}`;

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-30 bg-transparent">
            <div className="flex items-center">
                <Link href="/" className="text-logo whitespace-nowrap font-bold">
                    ARLANDA MC
                </Link>
            </div>
            <div className="flex items-center">
                <Link href="/latestNews" className={linkClasses('/latestNews')} title="Senaste nytt">
                    Senaste nytt
                </Link>
                <div className="relative">
                    <button onClick={toggleDropdown} className={linkClasses('/mx')} title="MX">
                        MX
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute bg-white shadow-lg rounded-lg mt-2">
                            <Link href="/mx/prislista" className="block px-4 py-2 text-black hover:bg-gray-200">Prislista</Link>
                            <Link href="/mx/faq" className="block px-4 py-2 text-black hover:bg-gray-200">Vanliga frågor</Link>
                            <Link href="/mx/traningstider" className="block px-4 py-2 text-black hover:bg-gray-200">Träningstider och Uppdelning</Link>
                            <Link href="/mx/info" className="block px-4 py-2 text-black hover:bg-gray-200">Info</Link>
                            <Link href="/mx/gobraap" className="block px-4 py-2 text-black hover:bg-gray-200">GoBraap</Link>
                            <Link href="/mx/licens" className="block px-4 py-2 text-black hover:bg-gray-200">Licens och Försäkringar</Link>
                        </div>
                    )}
                </div>
                <Link href="/enduro" className={linkClasses('/enduro')} title="Enduro">
                    Enduro
                </Link>
                <Link href="/members" className={linkClasses('/members')} title="Medlemmar">
                    Medlemmar
                </Link>
                <Link href="/member" className={linkClasses('/member')} title="Bli medlem">
                    Bli medlem
                </Link>
                <Link href="/crosskola" className={linkClasses('/crosskola')} title="Crosskola">
                    Crosskola
                </Link>
                <Link href="/calendar" className={linkClasses('/calendar')} title="Kalender">
                    <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
                </Link>
                <Link href="https://shop.thorsellsreklam.se/category/arlanda-mc" className={linkClasses('/webshop')} title="Webshop">
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </Link>
                <Link href="/about" className={linkClasses('/about')} title="Om oss">
                    <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                </Link>
                <Link href="https://www.google.com/maps/search/?api=1&query=Arlanda+MC,+123+45+Stockholm" className={linkClasses('/findus')} title="Hitta oss" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                </Link>
                <Link href="/contact" className={linkClasses('/contact')} title="Kontakta oss">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </Link>
                <Link href="https://www.facebook.com/arlandamc" className={linkClasses('/facebook')} title="Facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;