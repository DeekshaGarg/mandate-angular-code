import { ExpiryDate } from './expiry-date';

export class DebitCard {
    constructor(
        public cardNumber:number,
        public cvv:number,
        public expiryDate:ExpiryDate
    ){}
}
