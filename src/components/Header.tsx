import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FullFrameIcon, GridIcon, SearchIcon } from './Icons';
import SearchModal from './SearchModal';

interface HeaderProps {
    siteDomain?: string;
    onThemeChange?: (theme: 'system' | 'light' | 'dark') => void;
    currentTheme?: 'system' | 'light' | 'dark';
}

// Theme Icons
const SystemIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path>
    </svg>
);

const SunIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
    </svg>
);

const MoonIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
    </svg>
);

export const Header: React.FC<HeaderProps> = ({
    siteDomain = window.location.host,
    onThemeChange = () => { },
    currentTheme = 'system'
}) => {
    const location = useLocation();
    const isGridView = location.pathname === '/grid';
    const isFullView = location.pathname === '/' || location.pathname.startsWith('/p/');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Keyboard shortcut: Cmd/Ctrl + K to open search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const getThemeButtonClass = (theme: 'system' | 'light' | 'dark') => {
        const baseClass = "py-0.5 px-1.5 cursor-pointer hover:bg-gray-100/60 active:bg-gray-100 dark:hover:bg-gray-900/75 dark:active:bg-gray-900";
        if (currentTheme === theme) {
            return `${baseClass} text-black dark:text-white hover:text-black hover:dark:text-white`;
        }
        return `${baseClass} text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-400`;
    };

    return (
        <>
            <div className="animate-fadeIn">
                <div className="flex items-center justify-between w-full min-h-[4rem]">
                    {/* Left side - View toggles and search */}
                    <div className="flex gap-1 sm:gap-2">
                        <div className="flex divide-x overflow-hidden divide-gray-300 dark:divide-gray-800 border rounded-[0.25rem] border-gray-300 dark:border-gray-800 shadow-sm">
                            <Link
                                to="/"
                                className={`py-0.5 px-1.5 cursor-pointer hover:bg-gray-100/60 active:bg-gray-100 dark:hover:bg-gray-900/75 dark:active:bg-gray-900 ${isFullView && !isGridView
                                    ? 'text-black dark:text-white'
                                    : 'text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-400'
                                    }`}
                            >
                                <FullFrameIcon />
                            </Link>
                            <Link
                                to="/grid"
                                className={`py-0.5 px-1.5 cursor-pointer hover:bg-gray-100/60 active:bg-gray-100 dark:hover:bg-gray-900/75 dark:active:bg-gray-900 ${isGridView
                                    ? 'text-black dark:text-white'
                                    : 'text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-400'
                                    }`}
                            >
                                <GridIcon />
                            </Link>
                        </div>
                        <div className="flex divide-x overflow-hidden divide-gray-300 dark:divide-gray-800 border rounded-[0.25rem] border-transparent">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="py-0.5 px-1.5 cursor-pointer hover:bg-gray-100/60 active:bg-gray-100 dark:hover:bg-gray-900/75 dark:active:bg-gray-900 text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-400"
                            >
                                <div className="w-[28px] h-[24px] flex items-center justify-center">
                                    <SearchIcon />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Center - Site domain (hidden on mobile) */}
                    <div className="flex-grow text-center text-ellipsis overflow-hidden hidden xs:block">
                        <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            {siteDomain}
                        </Link>
                    </div>

                    {/* Right side - Theme toggle */}
                    <div className="flex divide-x overflow-hidden divide-gray-300 dark:divide-gray-800 border rounded-[0.25rem] border-gray-300 dark:border-gray-800 shadow-sm">
                        <button
                            onClick={() => onThemeChange('system')}
                            className={getThemeButtonClass('system')}
                            title="Use System Theme"
                        >
                            <div className="w-[28px] h-[24px] flex items-center justify-center">
                                <SystemIcon />
                            </div>
                        </button>
                        <button
                            onClick={() => onThemeChange('light')}
                            className={getThemeButtonClass('light')}
                            title="Light Mode"
                        >
                            <div className="w-[28px] h-[24px] flex items-center justify-center">
                                <SunIcon />
                            </div>
                        </button>
                        <button
                            onClick={() => onThemeChange('dark')}
                            className={getThemeButtonClass('dark')}
                            title="Dark Mode"
                        >
                            <div className="w-[28px] h-[24px] flex items-center justify-center">
                                <MoonIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Modal */}
            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                onThemeChange={onThemeChange}
                currentTheme={currentTheme}
            />
        </>
    );
};

export default Header;
