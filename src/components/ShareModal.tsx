import React, { useState } from 'react';
import { Photo } from '../types';
import { TagIcon } from './Icons';

interface ShareModalProps {
    photo?: Photo;
    collection?: {
        label: string;
        count: number;
        dateRange?: string;
        path: string;
        previewImages: string[];
    };
    isOpen: boolean;
    onClose: () => void;
    siteDomain?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
    photo,
    collection,
    isOpen,
    onClose
}) => {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const shareUrl = collection
        ? `${window.location.host}${collection.path}`
        : photo
            ? `${window.location.host}/p/${photo.id}`
            : window.location.host;

    const displayTitle = collection ? 'Share Photos' : 'Share Photo';
    const previewTitle = collection
        ? `${collection.label} (${collection.count} Photos)`
        : photo?.title;
    const previewSubtitle = collection
        ? collection.dateRange
        : photo ? `${photo.dateFormatted.toUpperCase()} ${photo.dateTime}` : '';

    const handleCopyLink = async () => {
        const fullUrl = `https://${shareUrl}`;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: previewTitle,
                    text: collection ? `Check out these photos: ${collection.label}` : `Check out this photo: ${photo?.title}`,
                    url: fullUrl,
                });
                return;
            } catch (err) {
                if ((err as Error).name !== 'AbortError') {
                    console.error('Error sharing:', err);
                } else {
                    return;
                }
            }
        }

        try {
            await navigator.clipboard.writeText(fullUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center p-3 sm:p-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onClick={handleBackdropClick}
        >
            <div className="animate-fadeIn w-full flex justify-center">
                <div className="w-[calc(100vw-1.5rem)] sm:w-[min(540px,90vw)] p-3 rounded-lg md:p-4 md:rounded-xl bg-white dark:bg-black dark:border dark:border-gray-800">
                    <div className="space-y-3 md:space-y-4 w-full">
                        {/* Header */}
                        <div className="flex items-center gap-x-3 text-2xl leading-snug">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="hidden xs:block"
                                height="22"
                                width="22"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15 8h.01"></path>
                                <path d="M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7"></path>
                                <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3"></path>
                                <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0"></path>
                                <path d="M16 22l5 -5"></path>
                                <path d="M21 21.5v-4.5h-4.5"></path>
                            </svg>
                            <div className="flex-grow dark:text-white">{displayTitle}</div>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Preview Card */}
                        <div className="group block w-full rounded-md overflow-hidden border shadow-sm border-gray-200 dark:border-gray-800">
                            <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-900" style={{ aspectRatio: '1.77778 / 1' }}>
                                {/* Label Overlay */}
                                {collection && (
                                    <div className="absolute top-3 left-3 z-10">
                                        <div className="inline-flex items-center bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20">
                                            <TagIcon className="text-white mr-2" />
                                            <span className="text-white text-sm font-bold uppercase tracking-wider">{collection.label}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Image Content */}
                                {collection ? (
                                    <div className={`grid h-full w-full gap-[1px] ${collection.previewImages.length >= 4 ? 'grid-cols-2 grid-rows-2' :
                                        collection.previewImages.length === 3 ? 'grid-cols-2 grid-rows-2' :
                                            collection.previewImages.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                        {collection.previewImages.slice(0, 4).map((src, i) => (
                                            <img
                                                key={i}
                                                alt=""
                                                className={`object-cover w-full h-full ${collection.previewImages.length === 3 && i === 0 ? 'row-span-2' : ''}`}
                                                src={src}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    photo && (
                                        <img
                                            alt={photo.title}
                                            className="absolute top-0 left-0 right-0 bottom-0 z-0 w-full h-full object-cover"
                                            src={photo.src}
                                        />
                                    )
                                )}
                            </div>
                            <div className="font-sans leading-tight flex flex-col gap-1 p-3 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
                                <div className="text-gray-800 dark:text-white font-medium capitalize">{previewTitle}</div>
                                <div className="text-dim text-[11px] uppercase tracking-wider opacity-70 dark:text-gray-400">
                                    {previewSubtitle}
                                </div>
                            </div>
                        </div>

                        {/* Share URL */}
                        <div className="rounded-md w-full overflow-hidden flex items-center justify-stretch border border-gray-200 dark:border-gray-800">
                            <div className="truncate p-2 w-full text-sm dark:text-white opacity-80">
                                {shareUrl}
                            </div>
                            <button
                                onClick={handleCopyLink}
                                className="p-3 border-l border-gray-200 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800/75 dark:active:bg-gray-900 cursor-pointer transition-colors"
                                title={copied ? 'Copied!' : 'Copy link'}
                            >
                                {copied ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                ) : (
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
