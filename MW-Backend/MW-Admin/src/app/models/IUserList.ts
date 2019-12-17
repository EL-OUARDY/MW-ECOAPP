
export interface IUserList {
    Id: string;

    Email: string;

    FullName: string;

    Gender: string;

    Phone: string;

    Country: string;

    City: string;

    EmailConfirmed: boolean;

    Avatar: string;

    Status: string;
    
    Orders: number;
    
    Points: number;
    
    Reviews: number;
    
    SignUpWith: number;

    Registration_Date: Date;
    
    Last_Visite: Date;
    
    UserAgent: string;
}
