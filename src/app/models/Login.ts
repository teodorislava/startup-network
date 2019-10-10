
export class Login
{
    constructor (
        public username:string = "",
        public password:string = ""
    )
    {}
}

export interface LoginResponse
{
    Id:number, 
    UserId:number
}