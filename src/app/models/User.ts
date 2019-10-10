
export class User
{
    constructor ( 
        public displayname:string = "",
        public username:string = "",
        public email:string = "",
        public bio:string = "",
        public password:string = "",
        public id:number = -1,
        public livesin:string = "",
        public birthday:string = "", 
        public profession:string = "", 
        public school:string = "",
        public hometown:string = "",
        public lastplaceworked:string = "",
        public status:string = ""
    )
    {}
}