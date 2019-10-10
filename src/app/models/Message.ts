export class Message {
    constructor(
        public id:number = -1, 
        public timestamp:string = "",
        public userid:number = -1,
        public displayname:string = "",
        public content:string = ""
    ) 
    {}
}