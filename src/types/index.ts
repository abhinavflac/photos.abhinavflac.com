export interface Photo {
    id: string;
    title: string;
    src: string;
    srcThumbnail: string;
    width: number;
    height: number;
    camera: {
        make: string;
        model: string;
        icon: 'apple' | 'sony' | 'camera';
    };
    exif: {
        focalLength: string;
        focalLengthEquiv?: string;
        aperture: string;
        shutterSpeed: string;
        iso: string;
        exposureCompensation: string;
    };
    tags: string[];
    date: string;
    dateFormatted: string;
    dateTime: string;
}

export interface Tag {
    tag: string;
    count: number;
}

export interface Camera {
    label: string;
    annotation: string;
    path: string;
}

export type ViewMode = 'full' | 'grid';
