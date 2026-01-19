import React from 'react';

export const AppleIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        className={className}
        height="15"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Apple</title>
        <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" />
    </svg>
);

export const CameraIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className={className}
        height="12"
        width="12"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="256" cy="280" r="63" />
        <path d="M440 96h-88l-32-32H192l-32 32H72c-22.092 0-40 17.908-40 40v272c0 22.092 17.908 40 40 40h368c22.092 0 40-17.908 40-40V136c0-22.092-17.908-40-40-40zM256 392c-61.855 0-112-50.145-112-112s50.145-112 112-112 112 50.145 112 112-50.145 112-112 112z" />
    </svg>
);

export const TagIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className={className}
        height="11"
        width="11"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" />
    </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <title>Search ⌘K</title>
        <circle cx="13.5" cy="11.5" r="4.875" strokeWidth="1.5" />
        <path d="M17 15L21 19" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const FullFrameIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <title>Full Frame</title>
        <rect x="5.625" y="6.625" width="16.75" height="10.75" rx="1" strokeWidth="1.25" />
        <line x1="5" y1="3.875" x2="23" y2="3.875" strokeWidth="1.25" />
        <line x1="23" y1="20.125" x2="5" y2="20.125" strokeWidth="1.25" />
    </svg>
);

export const GridIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <title>Grid</title>
        <rect x="5.625" y="6.625" width="16.75" height="10.75" rx="1" strokeWidth="1.25" />
        <line x1="11.375" y1="7" x2="11.375" y2="18" strokeWidth="1.25" />
        <line x1="16.875" y1="7" x2="16.875" y2="18" strokeWidth="1.25" />
        <line x1="5" y1="12.0417" x2="22.3333" y2="12.0417" strokeWidth="1.25" />
    </svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M15 8h.01" />
        <path d="M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" />
        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" />
        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
        <path d="M16 22l5 -5" />
        <path d="M21 21.5v-4.5h-4.5" />
    </svg>
);

export const LoadingSpinner: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        xmlns="http://www.w3.org/2000/svg"
        className={`animate-rotate-pulse ${className}`}
    >
        <path d="M11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11" />
    </svg>
);

export const ShareIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
);

