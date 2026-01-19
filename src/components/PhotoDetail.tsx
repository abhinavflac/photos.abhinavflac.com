import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Photo } from '../types';
import { photos } from '../data/photos';
import { AppleIcon, CameraIcon, TagIcon, DownloadIcon } from './Icons';
import ShareModal from './ShareModal';

interface PhotoDetailProps {
    allPhotos?: Photo[];
}

const PhotoDetail: React.FC<PhotoDetailProps> = ({ allPhotos = photos }) => {
    const { photoId } = useParams<{ photoId: string }>();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const currentIndex = useMemo(() => {
        return allPhotos.findIndex(p => p.id === photoId);
    }, [photoId, allPhotos]);

    const photo = allPhotos[currentIndex];
    const prevPhoto = currentIndex > 0 ? allPhotos[currentIndex - 1] : null;
    const nextPhoto = currentIndex < allPhotos.length - 1 ? allPhotos[currentIndex + 1] : null;

    // Get remaining photos (excluding current)
    const remainingPhotos = useMemo(() => {
        return allPhotos.filter((_, idx) => idx > currentIndex).slice(0, 12);
    }, [currentIndex, allPhotos]);

    if (!photo) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <Helmet>
                    <title>Photo Not Found - Abhinav's Pics!</title>
                </Helmet>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Photo not found</h1>
                    <Link to="/" className="text-medium hover:text-gray-900 dark:hover:text-gray-100">
                        ← Back to gallery
                    </Link>
                </div>
            </div>
        );
    }

    const getCameraIcon = () => {
        if (photo.camera.icon === 'apple') {
            return <AppleIcon className="translate-x-[-0.5px]" />;
        }
        return <CameraIcon className="translate-x-[-1px]" />;
    };

    return (
        <div>
            <Helmet>
                <title>{photo.title} - Abhinav's Pics!</title>
                <meta name="description" content={`Photo of ${photo.title} shot on ${photo.camera.model}`} />
                <meta property="og:title" content={`${photo.title} - Abhinav's Pics!`} />
                <meta property="og:description" content={`Photo of ${photo.title} shot on ${photo.camera.model}`} />
                <meta property="og:image" content={`https://photos.abhinavflac.com${photo.src}`} />
                <meta name="twitter:title" content={`${photo.title} - Abhinav's Pics!`} />
                <meta name="twitter:description" content={`Photo of ${photo.title} shot on ${photo.camera.model}`} />
                <meta name="twitter:image" content={`https://photos.abhinavflac.com${photo.src}`} />
            </Helmet>

            {/* Main Photo Section */}
            <div className="md:mb-8">
                <div className="animate-fadeIn">
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
                                            fetchPriority="high"
                                            width={photo.width}
                                            height={photo.height}
                                            decoding="async"
                                            className={`w-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            src={photo.src}
                                            onLoad={() => setImageLoaded(true)}
                                            style={{ color: 'transparent' }}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Metadata Column */}
                        <div className="col-span-1 md:col-span-3">
                            <div className="sticky top-20 self-start -translate-y-1 grid grid-cols-2 md:grid-cols-1 gap-x-0.5 sm:gap-x-1 gap-y-4 pb-6">
                                <div className="pr-2 md:pr-0">
                                    {/* Title */}
                                    <div className="md:relative flex gap-2 items-start">
                                        <span className="font-bold uppercase flex-grow text-black dark:text-white">
                                            {photo.title}
                                        </span>
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
                                                {photo.dateFormatted.replace(/20\d{2}/, (m) => m.slice(2))} {photo.dateTime}
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
            </div>

            {/* Navigation and Related Photos */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-4 max-w-7xl">
                {/* Related Photos Grid */}
                <div className="col-span-1 md:col-span-9 order-2 md:order-none">
                    {remainingPhotos.length > 0 && (
                        <div className="grid gap-0.5 sm:gap-1 grid-cols-2 xs:grid-cols-4 lg:grid-cols-5 items-center">
                            {remainingPhotos.map((p, index) => (
                                <div
                                    key={p.id}
                                    className="animate-fadeIn"
                                    style={{
                                        animationDelay: `${index * 30}ms`,
                                        opacity: 1,
                                        transform: 'translateX(0px) translateY(0px) scale(1)'
                                    }}
                                >
                                    <div className="flex relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
                                        <Link
                                            className="active:brightness-75 flex w-full h-full"
                                            to={`/p/${p.id}`}
                                        >
                                            <div className="flex object-cover w-full h-full relative">
                                                <img
                                                    alt={p.title}
                                                    loading="lazy"
                                                    width="300"
                                                    height="300"
                                                    decoding="async"
                                                    className="object-cover w-full h-full"
                                                    src={p.srcThumbnail}
                                                    style={{ color: 'transparent' }}
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* PREV/NEXT Navigation */}
                <div className="col-span-1 md:col-span-3 order-1 md:order-none">
                    <div className="animate-fadeIn">
                        <div className="grid grid-cols-2 gap-0.5 sm:gap-1 md:flex md:gap-4 select-none">
                            {prevPhoto ? (
                                <Link
                                    to={`/p/${prevPhoto.id}`}
                                    className="text-medium hover:text-gray-900 dark:hover:text-gray-100 uppercase font-medium"
                                >
                                    PREV
                                </Link>
                            ) : (
                                <span className="text-dim uppercase font-medium cursor-not-allowed">PREV</span>
                            )}
                            {nextPhoto ? (
                                <Link
                                    to={`/p/${nextPhoto.id}`}
                                    className="text-medium hover:text-gray-900 dark:hover:text-gray-100 uppercase font-medium"
                                >
                                    NEXT
                                </Link>
                            ) : (
                                <span className="text-dim uppercase font-medium cursor-not-allowed">NEXT</span>
                            )}
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
        </div>
    );
};

export default PhotoDetail;
