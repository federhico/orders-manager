import { IDestinationCordinates } from "./IDestinantionCordinates";
import { IUserInterface } from "./ISender";

export class Orders {
    id: string;
    title: string;
    description: string;
    status: string;
    sender: IUserInterface;
    destinationAddress: string;
    destinationCity: string;
    destinationCountry: string;
    destinationCoordinates: IDestinationCordinates;
    price: number;
    taxApplied: number;
    weight: number;
    messureUnit: string;
    createdOn: string;
}