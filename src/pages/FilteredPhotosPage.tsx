import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { photos } from '../data/photos';
import { PhotoGridItem } from '../components/PhotoGrid';
import { TagIcon, DownloadIcon, CameraIcon } from '../components/Icons';
import ShareModal from '../components/ShareModal';
import { Helmet } from 'react-helmet-async';

const FilteredPhotosPage: React.FC = () => {
    const { tagId, make, model, length } = useParams<{
        tagId?: string;
        make?: string;
        model?: string;
        length?: string;
    }>();

    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const { filteredPhotos, label, type, icon } = useMemo(() => {
        if (tagId) {
            return {
                filteredPhotos: photos.filter(p => p.tags.includes(tagId)),
                label: tagId,
                type: 'TAG',
                icon: <TagIcon className="translate-y-[1px]" />
            };
        }
        if (make && model) {
            const modelLabel = model.replace(/-/g, ' ');
            return {
                filteredPhotos: photos.filter(p =>
                    p.camera.make.toLowerCase() === make.toLowerCase() &&
                    p.camera.model.toLowerCase().replace(/\s+/g, '-') === model.toLowerCase()
                ),
                label: modelLabel,
                type: 'SHOT ON',
                icon: <CameraIcon className="translate-y-[1px]" />
            };
        }
        if (length) {
            return {
                filteredPhotos: photos.filter(p => p.exif?.focalLength === length),
                label: length,
                type: 'FOCAL',
                icon: <CameraIcon className="translate-y-[1px]" />
            };
        }
        return { filteredPhotos: [], label: '', type: '', icon: null };
    }, [tagId, make, model, length]);

    const dateRange = useMemo(() => {
        if (filteredPhotos.length === 0) return null;
        const sorted = [...filteredPhotos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        const latest = sorted[0].dateFormatted;
        const earliest = sorted[sorted.length - 1].dateFormatted;
        return { latest, earliest };
    }, [filteredPhotos]);

    if (filteredPhotos.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">No photos found</h1>
                    <Link to="/" className="text-medium hover:text-gray-900 dark:hover:text-gray-100">
                        ← Back to gallery
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[16rem] sm:min-h-[30rem] mb-12">
            <Helmet>
                <title>{`${type}: ${label}`} - Abhinav's Pics!</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-4 max-w-7xl">
                <div className="col-span-1 md:col-span-9">
                    <div className="space-y-8 mt-4">
                        <div className="animate-fadeIn">
                            <div className="grid gap-0.5 sm:gap-1 items-start xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
                                {/* Filter Label */}
                                <span className="inline-flex uppercase sm:col-span-2">
                                    <span className="group inline-flex gap-2">
                                        <div className="inline-flex gap-x-1 md:gap-x-1.5 text-black dark:text-white font-bold">
                                            <span className="h-[18px] md:h-[20px] w-[14px] inline-flex items-center justify-center">
                                                {icon}
                                            </span>
                                            <span className="uppercase">{label}</span>
                                        </div>
                                    </span>
                                </span>

                                {/* Count and Share */}
                                <span className="inline-flex gap-2 self-start uppercase text-gray-500 dark:text-gray-400 lg:col-span-2 text-sm">
                                    {filteredPhotos.length} tagged Photos
                                    <button
                                        type="button"
                                        onClick={() => setIsShareModalOpen(true)}
                                        className="translate-y-[1.5px] text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                                    >
                                        <span className="min-w-[1.25rem] h-4 translate-y-[-0.5px] inline-flex justify-center">
                                            <DownloadIcon />
                                        </span>
                                    </button>
                                </span>

                                {/* Date Range */}
                                {dateRange && (
                                    <span className="hidden sm:inline-block text-right uppercase text-gray-500 dark:text-gray-400 text-sm">
                                        {dateRange.latest}
                                        <br />
                                        – {dateRange.earliest}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Photo Grid */}
                        <div className="space-y-0.5 sm:space-y-1">
                            <div className="grid gap-0.5 sm:gap-1 grid-cols-2 xs:grid-cols-4 lg:grid-cols-5 items-center">
                                {filteredPhotos.map((photo, index) => (
                                    <PhotoGridItem key={photo.id} photo={photo} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isShareModalOpen && (
                <ShareModal
                    collection={{
                        label: label,
                        count: filteredPhotos.length,
                        dateRange: dateRange ? `${dateRange.earliest}–${dateRange.latest}` : '',
                        path: window.location.pathname,
                        previewImages: filteredPhotos.slice(0, 4).map(p => p.src)
                    }}
                    isOpen={isShareModalOpen}
                    onClose={() => setIsShareModalOpen(false)}
                />
            )}
        </div>
    );
};

export default FilteredPhotosPage;
