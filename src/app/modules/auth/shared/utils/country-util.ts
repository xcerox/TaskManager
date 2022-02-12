import { Country } from '../models/country'


export class CountryUtil {

  static objectToType(object: any): Country {
    object["id"] = object.countryID;
    object["name"] = object.countryName;
    delete object.countryID;
    delete object.countryName;
    return object;
  }

  static TypeToObject(country: Country): any {
    const object: any = { ...country };
    object["countryID"] = country.id;
    object["countryName"] = country.name;
    delete object.id;
    delete object.name;
    return object;
  }
}
