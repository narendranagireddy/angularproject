export class User {
    firstName: string;
    email: string;
    password: string;
    dob: number;
    gender: string;
    country?: string;
    terms: boolean;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
