import { IDestinationCordinates } from './IDestinantionCordinates';
import { IUserInterface } from './ISender';

export interface Orders {
  // tslint:disable-next-line: variable-name
  _id: string;
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
  favourite: boolean;
}
