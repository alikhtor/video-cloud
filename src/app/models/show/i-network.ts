import { ICountry } from './i-country';

export interface INetwork {
    id: number;
    name: string;
    country: ICountry;
}
