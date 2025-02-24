export class Payment {
    // client: string;
    // details: string;
    // amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        // this.client = c,
        // this.details = d,
        // this.amount = a
    }
    format() {
        return `${this.recipient} id owed $${this.amount} for ${this.details}`;
    }
}
