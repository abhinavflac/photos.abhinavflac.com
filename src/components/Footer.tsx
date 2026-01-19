import React from 'react';

interface FooterProps {
    totalPhotos: number;
}

export const Footer: React.FC<FooterProps> = ({ totalPhotos }) => {
    return (
        <div className="animate-fadeIn">
            <div className="flex items-center gap-1 text-dim min-h-10">
                <div className="flex gap-x-3 xs:gap-x-4 flex-grow flex-wrap">
                    <a href="/sign-in" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                        Admin
                    </a>
                </div>
                <div className="flex items-center h-10 text-gray-400 dark:text-gray-600 text-sm">
                    {totalPhotos} Photos
                </div>
            </div>
        </div>
    );
};

export default Footer;
