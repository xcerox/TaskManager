import { Location } from "./location";

export interface Project {
    id: number;
    name: string;
    startDate: string;
    teamSize: number;
    isActive: boolean;
    status: string;
    locationId: number;
    location: Location;
}
