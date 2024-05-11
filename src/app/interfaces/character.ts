export interface ICharacter {
    id: number;
    name: string;
    thumbnail: { path: string; extension: string };
}

export class NewCharcter implements ICharacter {
    id: number;
    name: string;
    thumbnail: { path: string; extension: string };

    constructor(id:number,name:string,thumbnail:{ path: string; extension: string }) {
        this.id = id;
        this.name = name;
        this.thumbnail = thumbnail;
    }
}