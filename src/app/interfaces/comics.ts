export interface IComic {
    id: number;
    title: string;
    thumbnail: { path: string; extension: string };
    pageCount: number;
    modified :string;
    creators?: {
        items: {
            name: string;
        }[];
    };
    
}

export class NewComic implements IComic {
    id: number;
    title: string;
    thumbnail: { path: string; extension: string };
    pageCount: number;
    modified: string;
    // creators: {
    //     items: {
    //         name: string;
    //     }[];
    // };

    constructor(id:number,title:string,thumbnail:{ path: string; extension: string },pageCount:number,modified:string) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.pageCount = pageCount;
        this.modified = modified;
    }
}
