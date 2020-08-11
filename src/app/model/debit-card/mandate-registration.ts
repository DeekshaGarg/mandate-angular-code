import { DebitCard } from './debit-card';

export class MandateRegistration {

    constructor(

        public accountNumber:string,
        public mandateIssuedTo:string,
        public startDate:string,
        public endDate:string,
        public frequency:string,
        public amountInFigures:number,
        public amountInWords:string,
        public purposeOfMandate:string,
        public cardDetails:DebitCard,
        public authMode:string,
        public mndtReqId:string
    ){

    }
}
