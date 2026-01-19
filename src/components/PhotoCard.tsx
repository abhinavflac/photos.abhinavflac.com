import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../types';
import { AppleIcon, CameraIcon, TagIcon, DownloadIcon } from './Icons';
import ShareModal from './ShareModal';

interface PhotoCardProps {
    photo: Photo;
    index: number;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const getCameraIcon = () => {
        if (photo.camera.icon === 'apple') {
            return <AppleIcon className="translate-x-[-0.5px]" />;
        }
        return <CameraIcon className="translate-x-[-1px]" />;
    };

    return (
        <>
            <div
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-4 max-w-7xl">
                    {/* Photo Column */}
                    <div className="col-span-1 md:col-span-9">
                        <Link to={`/p/${photo.id}`} className="block">
                            <div className="h-[90%]">
                                <div className="flex relative">
                                    {!imageLoaded && (
                                        <div
                                            className="absolute inset-0 animate-shimmer bg-gray-200 dark:bg-gray-800"
                                            style={{ aspectRatio: `${photo.width}/${photo.height}` }}
                                        />
                                    )}
                                    <img
                                        alt={photo.title}
                                        loading={index < 2 ? 'eager' : 'lazy'}
                                        width={photo.width}
                                        height={photo.height}
                                        decoding="async"
                                        className={`w-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                        src={photo.src}
                                        onLoad={() => setImageLoaded(true)}
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Metadata Column */}
                    <div className="col-span-1 md:col-span-3">
                        <div className="relative sticky top-4 self-start -translate-y-1 grid grid-cols-2 md:grid-cols-1 gap-x-0.5 sm:gap-x-1 gap-y-4 pb-6">
                            <div className="pr-2 md:pr-0">
                                {/* Title */}
                                <div className="md:relative flex gap-2 items-start">
                                    <Link
                                        to={`/p/${photo.id}`}
                                        className="font-bold uppercase flex-grow text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                                    >
                                        {photo.title}
                                    </Link>
                                </div>

                                {/* Camera and Tags */}
                                <div className="space-y-2 mt-2">
                                    <div>
                                        {/* Camera Info */}
                                        <span className="group inline-flex gap-2">
                                            <Link
                                                to={`/shot-on/${photo.camera.make.toLowerCase()}/${photo.camera.model.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="inline-flex gap-x-1 md:gap-x-1.5 text-medium hover:text-gray-900 dark:hover:text-gray-100"
                                            >
                                                <span className="h-[18px] md:h-[20px] w-[14px] inline-flex items-center justify-center">
                                                    <span>{getCameraIcon()}</span>
                                                </span>
                                                <span className="uppercase text-sm">
                                                    {photo.camera.model}
                                                </span>
                                            </Link>
                                        </span>

                                        {/* Tags */}
                                        <div className="flex flex-col mt-1">
                                            {photo.tags.map((tag) => (
                                                <span key={tag} className="group inline-flex gap-2">
                                                    <Link
                                                        to={`/tag/${tag}`}
                                                        className="inline-flex gap-x-1 md:gap-x-1.5 text-medium hover:text-gray-900 dark:hover:text-gray-100"
                                                    >
                                                        <span className="h-[18px] md:h-[20px] w-[14px] inline-flex items-center justify-center">
                                                            <span>
                                                                <TagIcon className="translate-y-[1px]" />
                                                            </span>
                                                        </span>
                                                        <span className="uppercase text-sm">{tag}</span>
                                                    </Link>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* EXIF Data and Date */}
                            <div className="space-y-2">
                                {photo.exif && (
                                    <ul className="text-medium text-sm space-y-0.5">
                                        <li>
                                            <Link to={`/focal/${photo.exif.focalLength}`} className="hover:text-gray-900 dark:hover:text-gray-100">
                                                {photo.exif.focalLength}
                                            </Link>
                                            {photo.exif.focalLengthEquiv && (
                                                <span className="text-extra-dim ml-1" title="35mm equivalent">
                                                    {photo.exif.focalLengthEquiv}
                                                </span>
                                            )}
                                        </li>
                                        <li>{photo.exif.aperture}</li>
                                        <li>{photo.exif.shutterSpeed}</li>
                                        <li>{photo.exif.iso}</li>
                                        <li>{photo.exif.exposureCompensation}</li>
                                    </ul>
                                )}

                                <div className="flex gap-x-2 gap-y-2 md:flex-col md:justify-normal">
                                    <span
                                        title={`${photo.dateFormatted} ${photo.dateTime}`}
                                        className="text-medium uppercase text-sm"
                                    >
                                        <span className="xs:hidden">{photo.dateFormatted}</span>
                                        <span className="hidden xs:inline-block sm:hidden">
                                            {photo.dateFormatted.replace('2025', '25')} {photo.dateTime}
                                        </span>
                                        <span className="hidden sm:inline-block">
                                            {photo.dateFormatted} {photo.dateTime}
                                        </span>
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => setIsShareModalOpen(true)}
                                        className="md:translate-x-[-2.5px] translate-y-[1.5px] md:translate-y-0 text-medium -mx-0.5 translate-x-0.5 sm:mx-0 sm:translate-x-0 h-4 hover:text-dim active:text-medium disabled:!bg-transparent inline-flex items-center gap-2 self-start"
                                        title="Share photo"
                                    >
                                        <span className="min-w-[1.25rem] h-4 translate-y-[-0.5px] inline-flex justify-center">
                                            <DownloadIcon />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Share Modal */}
            <ShareModal
                photo={photo}
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
            />
        </>
    );
};

export default PhotoCard;
