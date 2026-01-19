import React from 'react';
import { PhotoList } from '../components';
import { photos } from '../data/photos';

const FullViewPage: React.FC = () => {
    return (
        <div className="min-h-[16rem] sm:min-h-[30rem] mb-12">
            <div className="space-y-1">
                <PhotoList photos={photos} />
            </div>
        </div>
    );
};

export default FullViewPage;
