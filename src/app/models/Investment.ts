export class Investment {
    constructor(
        public id:number = -1,
        public amount:number = 0, 
        public currency:string = "",
        public percentage:number = 0,
        public userid:number = -1,
        public contracttext:string = ""
    ) 
    {}
}