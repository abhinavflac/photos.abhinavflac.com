import React from 'react';
import { Photo } from '../types';
import PhotoCard from './PhotoCard';

interface PhotoListProps {
    photos: Photo[];
}

export const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
    return (
        <div className="space-y-1">
            {photos.map((photo, index) => (
                <PhotoCard key={photo.id} photo={photo} index={index} />
            ))}
        </div>
    );
};

export default PhotoList;
