import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiWikiversity } from "react-icons/si";
import { FaBars } from "react-icons/fa";

function Navbar() {
    useEffect(() => {
        document.title = "COLLEGESCOPE";
    }, []);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((open) => !open);

    
    const handleNavClick = () => {
        if (isMenuOpen) setIsMenuOpen(false);
    };

    return (
        <nav className="bg-blue-950 shadow">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between relative">
                <div className="flex items-center gap-3">
                    <SiWikiversity size={32} className="text-white" />
                    <Link to="/" className="text-white font-extrabold text-2xl tracking-wide select-none">
                        COLLEGESCOPE
                    </Link>
                </div>

                <button
                    className="sm:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <FaBars size={28} />
                </button>

                <ul
                    className={`
                        absolute sm:static top-16 left-0 w-full sm:w-auto bg-blue-950 sm:bg-transparent
                        flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white font-bold
                        transition-all duration-300 z-20
                        ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'} 
                        sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto
                    `}
                    style={{
                        transitionProperty: 'opacity, transform',
                    }}
                >
                    <li>
                        <Link to="/" className="hover:text-blue-300 px-4 py-2 transition-colors duration-200" onClick={handleNavClick}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-300 px-4 py-2 transition-colors duration-200" onClick={handleNavClick}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-300 px-4 py-2 transition-colors duration-200" onClick={handleNavClick}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/addreview" className="hover:text-blue-300 px-4 py-2 transition-colors duration-200" onClick={handleNavClick}>
                           Add Review
                        </Link>
                    </li>

                    <li>
                        <Link to="/explore" className="hover:text-blue-300 px-4 py-2 transition-colors duration-200" onClick={handleNavClick}>
                            Explore Colleges
                        </Link>
                    </li>
                </ul>
            </div>

            
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 sm:hidden z-10 animate-fadeIn"
                    onClick={toggleMenu}
                    aria-label="Close menu overlay"
                />
            )}
        </nav>
    );
}

export default Navbar;
