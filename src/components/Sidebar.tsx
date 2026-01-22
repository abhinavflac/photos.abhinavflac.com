import React from 'react';
import { CameraIcon } from './Icons';
import { tags, cameras, totalPhotos } from '../data/photos';

export const Sidebar: React.FC = () => {
    return (
        <aside className="hidden lg:block lg:col-span-3 animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <div className="sticky top-4 space-y-6">
                {/* Tags Section */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase">
                            Tags
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <a
                                key={tag.tag}
                                href={`/tag/${tag.tag}`}
                                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors capitalize"
                            >
                                {tag.tag}
                                <span className="ml-1.5 text-gray-400 dark:text-gray-500">
                                    {tag.count}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Cameras Section */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <CameraIcon className="text-gray-400" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase">
                            Cameras
                        </span>
                    </div>
                    <ul className="space-y-1">
                        {cameras.map((camera) => (
                            <li key={camera.path} className="flex justify-between items-center">
                                <a
                                    href={camera.path}
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                                >
                                    {camera.label}
                                </a>
                                <span className="text-xs text-gray-400 dark:text-gray-600">
                                    {camera.annotation}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Stats */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                        {totalPhotos} Photos
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
