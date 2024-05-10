export interface ICharacter {
    id: number;
    name: string;
    thumbnail: { path: string; extension: string };
}

export class NewCharcter implements ICharacter {
    id: number;
    name: string;
    thumbnail: { path: string; extension: string };

    constructor(data: ICharacter) {
        this.id = data.id;
        this.name = data.name;
        this.thumbnail = data.thumbnail;
    }
}