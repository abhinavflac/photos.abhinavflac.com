import React from 'react';
import { PhotoGrid } from '../components';
import { photos } from '../data/photos';

const GridViewPage: React.FC = () => {
    return (
        <div className="min-h-[16rem] sm:min-h-[30rem] mb-12">
            <div className="space-y-1">
                <PhotoGrid photos={photos} />
            </div>
        </div>
    );
};

export default GridViewPage;
