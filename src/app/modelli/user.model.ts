export class User{
    constructor(
        public email : string|undefined,
        public id : string|undefined,
        private _token : string|undefined,
        private _expirationDate : Date|undefined


    ) {}

    get token(){
        if (!this._expirationDate  || (new Date) > this._expirationDate){
            return null;
        }

        return this._token;
    }
}