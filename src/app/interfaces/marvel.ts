export interface IComic {
    id: number;
    title: string;
    thumbnail: { path: string; extension: string };
    pageCount: number;
}

export class NewComic implements IComic {
    id: number;
    title: string;
    thumbnail: { path: string; extension: string };
    pageCount: number;

    constructor(data: IComic) {
        this.id = data.id;
        this.title = data.title;
        this.thumbnail = data.thumbnail;
        this.pageCount = data.pageCount;
    }
}
