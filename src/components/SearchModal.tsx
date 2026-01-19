import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { tags, cameras, totalPhotos } from '../data/photos';
import { TagIcon, CameraIcon } from './Icons';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onThemeChange: (theme: 'system' | 'light' | 'dark') => void;
    currentTheme: 'system' | 'light' | 'dark';
}

// Icons for the search modal
const PageIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
    </svg>
);

const ThemeIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
        <path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61zM256 432v-96a80 80 0 0 1 0-160V80c97.05 0 176 79 176 176s-78.95 176-176 176z"></path>
        <path d="M336 256a80 80 0 0 0-80-80v160a80 80 0 0 0 80-80z"></path>
    </svg>
);

const SystemIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path>
    </svg>
);

const SunIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
    </svg>
);

const MoonIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
    </svg>
);

export const SearchModal: React.FC<SearchModalProps> = ({
    isOpen,
    onClose,
    onThemeChange,
    currentTheme
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    // Build items list
    const allItems = [
        // Tags
        ...tags.map(tag => ({
            type: 'tag' as const,
            label: tag.tag,
            count: tag.count,
            path: `/tag/${tag.tag}`
        })),
        // Cameras
        ...cameras.map(camera => ({
            type: 'camera' as const,
            label: camera.label,
            count: parseInt(camera.annotation.replace('× ', '')),
            path: camera.path
        })),
        // Pages
        { type: 'page' as const, label: 'Home', path: '/' },
        { type: 'page' as const, label: 'Grid', path: '/grid' },
        // Theme
        { type: 'theme' as const, label: 'Use System', value: 'system' as const },
        { type: 'theme' as const, label: 'Light Mode', value: 'light' as const },
        { type: 'theme' as const, label: 'Dark Mode', value: 'dark' as const },
    ];

    // Filter items based on search
    const filteredItems = searchQuery
        ? allItems.filter(item =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : allItems;

    // Group items by type
    const groupedItems = {
        tags: filteredItems.filter(i => i.type === 'tag'),
        cameras: filteredItems.filter(i => i.type === 'camera'),
        pages: filteredItems.filter(i => i.type === 'page'),
        themes: filteredItems.filter(i => i.type === 'theme'),
    };

    // Flatten for keyboard navigation
    const flatItems = [...groupedItems.tags, ...groupedItems.cameras, ...groupedItems.pages, ...groupedItems.themes];

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [searchQuery]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => Math.min(prev + 1, flatItems.length - 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const item = flatItems[selectedIndex];
                if (item) {
                    handleSelect(item);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, selectedIndex, flatItems]);

    // Keyboard shortcut to open search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (!isOpen) {
                    // This is handled by parent
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleSelect = (item: typeof allItems[0]) => {
        if (item.type === 'theme' && 'value' in item) {
            onThemeChange(item.value);
        } else if ('path' in item) {
            navigate(item.path);
        }
        onClose();
        setSearchQuery('');
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
            setSearchQuery('');
        }
    };

    if (!isOpen) return null;

    let currentFlatIndex = 0;

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-start pt-[10vh]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={handleBackdropClick}
        >
            <div className="w-[calc(100vw-1.5rem)] sm:w-[min(540px,90vw)] p-3 rounded-lg md:p-4 md:rounded-xl bg-white dark:bg-black dark:border dark:border-gray-800 shadow-xl animate-fadeIn">
                <div className="space-y-1.5">
                    {/* Search Input */}
                    <div className="relative">
                        <input
                            ref={inputRef}
                            type="text"
                            className="w-full !min-w-0 px-3 py-2 rounded-md bg-transparent border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-0 focus:border-gray-300 dark:focus:border-gray-700 placeholder:text-gray-400/80 dark:placeholder:text-gray-700"
                            placeholder="Search photos, views, settings ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                        />
                    </div>

                    {/* Results */}
                    <div className="relative overflow-y-auto max-h-48 sm:max-h-72">
                        {/* Tags */}
                        {groupedItems.tags.length > 0 && (
                            <div className="mb-2">
                                <div className="flex items-center px-2 py-1 font-medium text-dim text-xs tracking-wider uppercase">
                                    <div className="w-5">
                                        <TagIcon />
                                    </div>
                                    Tags
                                </div>
                                {groupedItems.tags.map((item) => {
                                    const flatIdx = currentFlatIndex++;
                                    return (
                                        <div
                                            key={`tag-${item.label}`}
                                            className={`px-2 py-1 rounded-md cursor-pointer tracking-wide ${selectedIndex === flatIdx
                                                ? 'bg-gray-100 dark:bg-gray-900/75'
                                                : ''
                                                }`}
                                            onClick={() => handleSelect(item)}
                                            onMouseEnter={() => setSelectedIndex(flatIdx)}
                                        >
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <span className="grow text-ellipsis truncate">{item.label}</span>
                                                {'count' in item && (
                                                    <span className="text-dim whitespace-nowrap">× {item.count}</span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Cameras */}
                        {groupedItems.cameras.length > 0 && (
                            <div className="mb-2">
                                <div className="flex items-center px-2 py-1 font-medium text-dim text-xs tracking-wider uppercase">
                                    <div className="w-5">
                                        <CameraIcon />
                                    </div>
                                    Cameras
                                </div>
                                {groupedItems.cameras.map((item) => {
                                    const flatIdx = currentFlatIndex++;
                                    return (
                                        <div
                                            key={`camera-${item.label}`}
                                            className={`px-2 py-1 rounded-md cursor-pointer tracking-wide ${selectedIndex === flatIdx
                                                ? 'bg-gray-100 dark:bg-gray-900/75'
                                                : ''
                                                }`}
                                            onClick={() => handleSelect(item)}
                                            onMouseEnter={() => setSelectedIndex(flatIdx)}
                                        >
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <span className="grow text-ellipsis truncate">{item.label}</span>
                                                {'count' in item && (
                                                    <span className="text-dim whitespace-nowrap">× {item.count}</span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Pages */}
                        {groupedItems.pages.length > 0 && (
                            <div className="mb-2">
                                <div className="flex items-center px-2 py-1 font-medium text-dim text-xs tracking-wider uppercase">
                                    <div className="w-5">
                                        <PageIcon />
                                    </div>
                                    Pages
                                </div>
                                {groupedItems.pages.map((item) => {
                                    const flatIdx = currentFlatIndex++;
                                    return (
                                        <div
                                            key={`page-${item.label}`}
                                            className={`px-2 py-1 rounded-md cursor-pointer tracking-wide ${selectedIndex === flatIdx
                                                ? 'bg-gray-100 dark:bg-gray-900/75'
                                                : ''
                                                }`}
                                            onClick={() => handleSelect(item)}
                                            onMouseEnter={() => setSelectedIndex(flatIdx)}
                                        >
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <span className="grow text-ellipsis truncate">{item.label}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Theme */}
                        {groupedItems.themes.length > 0 && (
                            <div className="mb-2">
                                <div className="flex items-center px-2 py-1 font-medium text-dim text-xs tracking-wider uppercase">
                                    <div className="w-5">
                                        <ThemeIcon />
                                    </div>
                                    Theme
                                </div>
                                {groupedItems.themes.map((item) => {
                                    const flatIdx = currentFlatIndex++;
                                    const themeValue = 'value' in item ? item.value : null;
                                    const isActive = themeValue === currentTheme;

                                    return (
                                        <div
                                            key={`theme-${item.label}`}
                                            className={`px-2 py-1 rounded-md cursor-pointer tracking-wide ${selectedIndex === flatIdx
                                                ? 'bg-gray-100 dark:bg-gray-900/75'
                                                : ''
                                                } ${isActive ? 'text-black dark:text-white font-medium' : ''}`}
                                            onClick={() => handleSelect(item)}
                                            onMouseEnter={() => setSelectedIndex(flatIdx)}
                                        >
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <span className="grow text-ellipsis truncate">
                                                    {item.label}
                                                    {isActive && <span className="ml-2 text-xs opacity-60">(Active)</span>}
                                                </span>
                                                <span className="text-dim whitespace-nowrap">
                                                    {themeValue === 'system' && <SystemIcon />}
                                                    {themeValue === 'light' && <SunIcon />}
                                                    {themeValue === 'dark' && <MoonIcon />}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Photo count */}
                        <div className="text-center text-dim pt-3 sm:pt-4">
                            {totalPhotos} Photos
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
