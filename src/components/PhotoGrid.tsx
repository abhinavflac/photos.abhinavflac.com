import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../types';
import { Sidebar } from './Sidebar';

interface PhotoGridItemProps {
    photo: Photo;
    index: number;
}

export const PhotoGridItem: React.FC<PhotoGridItemProps> = ({ photo, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className="animate-scaleUp"
            style={{
                animationDelay: `${index * 40}ms`,
                opacity: 0
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
                <Sidebar />
            </div>
        </div>
    );
};

export default PhotoGrid;
