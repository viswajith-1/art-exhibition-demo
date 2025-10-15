import React, { useState, useEffect } from 'react';

// Data for navigation links
const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

/**
 * Fixed and responsive navigation bar component.
 */
const Navbar = () => {
    // State to control the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // State for scroll visibility
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Function to toggle the mobile menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Effect to handle scroll-based visibility (Vanish on scroll down, only show when at the top)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide navbar if scrolling down and scrolled past 100px
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setIsMenuOpen(false); // Close mobile menu when hiding navbar
            } 
            // Show navbar ONLY if the user is at the very top (scroll position is 0)
            else if (currentScrollY === 0) {
                setIsVisible(true);
            }
            
            // Update the last known scroll position
            setLastScrollY(currentScrollY);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]); // Re-run effect when lastScrollY changes

    const LinkItem = ({ link, isMobile = false, onClick = () => {} }) => {
        // Shared classes for link text color and hover effect
        const baseClasses = "text-white transition duration-300";
        
        // Classes specific to desktop vs. mobile layout
        const layoutClasses = isMobile 
            ? "block hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium text-center"
            : "px-3 py-2 rounded-lg";
            
        // No color change on hover, text remains white
        const desktopHoverClass = ''; 
        
        const handleClick = (e) => {
            // Prevent default action for hash links if needed, or just call custom onClick
            onClick();
        };

        return (
            // Use 'group' utility on the parent 'a' tag to control the child underline
            <a 
                key={link.name}
                href={link.href} 
                onClick={handleClick}
                className={`relative group ${baseClasses} ${layoutClasses} ${desktopHoverClass}`}
            >
                {link.name}
                
                {/* Animated White Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
        );
    };

    return (
        /* Fixed navigation bar with scroll-based visibility. */
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent font-sans 
                        transition-transform duration-300 ease-out 
                        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="w-full mx-auto">
                {/* - Mobile: justify-end (aligns the visible menu button to the right).
                  - Desktop (md:): justify-center (centers the visible links).
                */}
                <div className="flex justify-end md:justify-center items-center py-4 px-4 sm:px-6 lg:px-8">
                    {/* Desktop Navigation Links (Visible and Centered on md screens and up) */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <LinkItem key={link.name} link={link} />
                        ))}
                    </div>

                    {/* Mobile Menu Button (Hamburger) - Aligned to the right on mobile screens */}
                    <button 
                        onClick={toggleMenu} 
                        className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition duration-200"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu-items"
                    >
                        {/* Icon changes based on menu state */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Conditionally rendered based on state) */}
            <div 
                id="mobile-menu-items" 
                className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden bg-gray-900/50 backdrop-blur-sm shadow-lg`}
            >
                <div className="flex flex-col w-full px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <LinkItem key={link.name} link={link} isMobile={true} onClick={toggleMenu} />
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
