import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Photo, Tag, Camera } from '../types';
import { tags, cameras, totalPhotos } from '../data/photos';
import { TagIcon, CameraIcon } from './Icons';

interface PhotoGridItemProps {
    photo: Photo;
    index: number;
}

export const PhotoGridItem: React.FC<PhotoGridItemProps> = ({ photo, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
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
                    to={`/p/${photo.id}`}
                >
                    <div className="flex object-cover w-full h-full flex relative">
                        {!imageLoaded && (
                            <div className="absolute inset-0 animate-shimmer bg-gray-200 dark:bg-gray-800" />
                        )}
                        <img
                            alt={photo.title}
                            loading="lazy"
                            width="300"
                            height="300"
                            decoding="async"
                            className={`object-cover w-full h-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                            src={photo.srcThumbnail}
                            onLoad={() => setImageLoaded(true)}
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

interface SidebarProps {
    tags: Tag[];
    cameras: Camera[];
    totalPhotos: number;
}

const Sidebar: React.FC<SidebarProps> = ({ tags, cameras, totalPhotos }) => {
    return (
        <div className="sticky top-4 space-y-4 mt-[-4px]">
            {/* Tags Section */}
            <div className="space-y-1">
                <div className="text-dim uppercase">
                    <div className="text-gray-900 dark:text-gray-100 flex items-center mb-1 gap-1 uppercase">
                        <span className="w-[1rem]">
                            <TagIcon />
                        </span>
                        Tags
                    </div>
                </div>
                {tags.map((tag) => (
                    <div key={tag.tag} className="text-dim uppercase">
                        <span className="group inline-flex gap-2">
                            <Link
                                className="inline-flex gap-x-1 md:gap-x-1.5 text-dim"
                                to={`/tag/${tag.tag}`}
                            >
                                <span className="uppercase">
                                    <span className="leading-none h-max-baseline px-[5px] py-[2.75px] text-[0.7rem] font-medium rounded-[0.25rem] text-medium bg-gray-300/30 dark:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100 active:bg-gray-200 dark:active:bg-gray-700/60 uppercase tracking-wider translate-y-[-0.5px]">
                                        <span className="capitalize">{tag.tag}</span>
                                    </span>
                                </span>
                            </Link>
                            <span className="hidden group-hover:inline">{tag.count}</span>
                        </span>
                    </div>
                ))}
            </div>

            {/* Cameras Section */}
            <div className="space-y-1">
                <div className="text-dim uppercase">
                    <div className="text-gray-900 dark:text-gray-100 flex items-center mb-1 gap-1 uppercase">
                        <span className="w-[1rem]">
                            <CameraIcon />
                        </span>
                        Cameras
                    </div>
                </div>
                {cameras.map((camera) => (
                    <div key={camera.label} className="text-dim uppercase">
                        <span className="group inline-flex gap-2">
                            <Link
                                className="inline-flex gap-x-1 md:gap-x-1.5 text-dim"
                                to={camera.path}
                            >
                                <span className="uppercase">
                                    <span className="leading-none h-max-baseline px-[5px] py-[2.75px] text-[0.7rem] font-medium rounded-[0.25rem] text-medium bg-gray-300/30 dark:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100 active:bg-gray-200 dark:active:bg-gray-700/60 uppercase tracking-wider translate-y-[-0.5px]">
                                        {camera.label}
                                    </span>
                                </span>
                            </Link>
                            <span className="hidden group-hover:inline">{camera.annotation.replace('× ', '')}</span>
                        </span>
                    </div>
                ))}
            </div>

            {/* Photo Count */}
            <div className="space-y-1">
                <div className="text-dim uppercase">
                    {totalPhotos} Photos
                </div>
            </div>
        </div>
    );
};

interface PhotoGridProps {
    photos: Photo[];
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-4 max-w-7xl">
            {/* Photos Column */}
            <div className="col-span-1 md:col-span-9">
                <div className="space-y-0.5 sm:space-y-1">
                    <div className="grid gap-0.5 sm:gap-1 grid-cols-2 xs:grid-cols-4 lg:grid-cols-5 items-center">
                        {photos.map((photo, index) => (
                            <PhotoGridItem key={photo.id} photo={photo} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar Column */}
            <div className="col-span-1 md:col-span-3 hidden md:block">
                <Sidebar tags={tags} cameras={cameras} totalPhotos={totalPhotos} />
            </div>
        </div>
    );
};

export default PhotoGrid;
