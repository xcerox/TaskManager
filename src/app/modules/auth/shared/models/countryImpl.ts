import { Country } from "./country";

export class CountryImpl implements Country {
    countryID: number;
    countryName: string;

    constructor(countryID: number, countryName: string)
    {
        this.countryID = countryID;
        this.countryName = countryName;
    }
}
