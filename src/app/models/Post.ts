export class Post {
    constructor(
        public content:string = "",
        public displayname:string = "",
        public brains:number = 0,
        public timestamp:string = "",
        public id:number = -1,
        public tags:Object[] = [],
        public mentions:Object[] = [],
        public userid:number = -1
    ) 
    {}
}