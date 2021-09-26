import { Location } from "../models/location";


export class LocationUtil {

  static objectToLocation(object: any): Location {
    object["id"] = object.clientLocationID;
    object["name"] = object.clientLocationName;
    delete object.clientLocationID;
    delete object.clientLocationName;
    return object;
  }

  static locationToObject(location: Location): any {
    const object: any = { ...location };
    object["clientLocationID"] = location.id;
    object["clientLocationName"] = location.name;
    delete object.id;
    delete object.name;
    return object;
  }
}
