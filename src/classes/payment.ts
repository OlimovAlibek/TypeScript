import {HasFormatter} from '../interfaces/HasFormatter'

export class Payment implements HasFormatter {
    // client: string;
    // details: string;
    // amount: number;

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) {
        // this.client = c,
        // this.details = d,
        // this.amount = a
    }

    format() {
        return `${this.recipient} id owed $${this.amount} for ${this.details}`
    }
}