export class Comment
{
    constructor(
        public content:string = "",
        public id:number = -1,
        public timestamp:string = "",
        public displayname:string = ""
    )
    {}
}