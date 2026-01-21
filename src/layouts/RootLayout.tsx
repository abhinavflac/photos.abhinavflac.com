import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../components/ThemeProvider';
import { Header, Footer } from '../components';
import { totalPhotos } from '../data/photos';

const RootLayout: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show if scrolling up, hide if scrolling down (after threshold)
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
                setIsVisible(true);
            }

            setIsAtTop(currentScrollY < 10);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="mb-3 lg:mb-6">
            <Helmet>
                <title>Abhinav's Pics!</title>
                <meta name="description" content={window.location.host} />
                <meta property="og:title" content="Abhinav's Pics!" />
                <meta property="og:description" content={window.location.host} />
                <meta property="og:image" content={`${window.location.origin}/home-image`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@abhinavflac" />
                <meta name="twitter:site" content="@abhinavflac" />
                <meta name="twitter:title" content="Abhinav's Pics!" />
                <meta name="twitter:description" content={window.location.host} />
                <meta name="twitter:image" content={`${window.location.origin}/home-image`} />
            </Helmet>

            {/* Header Section - Smart Sticky Behavior */}
            <div
                className={`z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 mx-0 px-3 lg:px-6 transition-transform duration-300 ease-in-out ${isAtTop ? 'relative' : 'fixed top-0 left-0 right-0'
                    } ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-4 max-w-7xl">
                    <div className="col-span-1 md:col-span-12">
                        <Header
                            onThemeChange={setTheme}
                            currentTheme={theme}
                            siteDomain={window.location.host}
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className={`mx-3 lg:mx-6 ${!isAtTop ? 'mt-[4rem]' : ''}`}>
                <Outlet />

                {/* Footer Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-4 max-w-7xl">
                    <div className="col-span-1 md:col-span-9">
                        <Footer totalPhotos={totalPhotos} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RootLayout;
