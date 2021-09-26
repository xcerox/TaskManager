import { Location } from "./location";

export interface Project {
    id: number;
    name: string;
    startDate: string;
    teamSize: string;
    isActive: boolean;
    status: string;
    locationId: number;
    location: Location;
}
