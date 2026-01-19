import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../components/ThemeProvider';
import { Header, Footer } from '../components';
import { totalPhotos } from '../data/photos';

const RootLayout: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <main className="mb-3 lg:mb-6">
            <Helmet>
                <title>Abhinav's Pics!</title>
                <meta name="description" content="photos.abhinavflac.com" />
                <meta property="og:title" content="Abhinav's Pics!" />
                <meta property="og:description" content="photos.abhinavflac.com" />
                <meta property="og:image" content="https://photos.abhinavflac.com/home-image" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@abhinavflac" />
                <meta name="twitter:site" content="@abhinavflac" />
                <meta name="twitter:title" content="Abhinav's Pics!" />
                <meta name="twitter:description" content="photos.abhinavflac.com" />
                <meta name="twitter:image" content="https://photos.abhinavflac.com/home-image" />
            </Helmet>

            {/* Header Section - Sticky at Top */}
            <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 mx-0 px-3 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-4 max-w-7xl">
                    <div className="col-span-1 md:col-span-12">
                        <Header
                            onThemeChange={setTheme}
                            currentTheme={theme}
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-3 lg:mx-6">
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
