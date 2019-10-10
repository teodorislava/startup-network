export class Project {
    constructor(
        public id:number = -1,
        public name:string = "",
        public fundsraised:number = 0, 
        public fundinggoalmax:number = 0, 
        public fundinggoalmin:number = 0,
        public description:string = "",
        public startdate:string = "",
        public enddate:string = "",
        public status:string = "",
        public technologies:Object[] = [],
        public creatordisplyaname:string = ""
    ) 
    {}
}