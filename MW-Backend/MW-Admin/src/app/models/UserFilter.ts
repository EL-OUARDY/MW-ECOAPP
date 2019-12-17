import { QueryObject } from './QueryObject';

export class UserFilter extends QueryObject {
    Search: string;
    UserRole: string;

    MinDate: string;
    MaxDate: string;
    
    constructor() {
        super();
        this.UserRole = null;
    }

    resetFields() {
        this.UserRole = undefined;
        this.MinDate = undefined;
        this.MaxDate = undefined;
    }
}
