import { Project } from "../models/project";
import { LocationUtil } from "./location-util";

export class ProjectUtil {

  static objectToProject(object: any): Project {
    object["id"] = object.projectID;
    object["name"] = object.projectName;
    object["startDate"] = object.dateOfStart;
    object["isActive"] = object.active;
    object["locationId"] = object.clientLocationID || null;
    object["location"] = LocationUtil.objectToLocation(object.clientLocation);
    delete object.projectID;
    delete object.projectName;
    delete object.dateOfStart;
    delete object.active;
    delete object.clientLocationID;
    delete object.clientLocation;
    return object;
  }

  static projectToObject(project: Project): any {
    const object: any = { ...project };
    object["projectID"] = project.id;
    object["projectName"] = project.name;
    object["dateOfStart"] = project.startDate;
    object["active"] = project.isActive;
    object["clientLocationID"] = project.locationId;
    object["clientLocation"] = LocationUtil.locationToObject(project.location || {});
    delete object.id;
    delete object.name;
    delete object.startDate;
    return object;
  }

  static isProjectUpdated(projectUpdated: Project, projects: Array<Project>): boolean {
    const project = projects.find((project: Project) => project.id == projectUpdated.id);
    return JSON.stringify(project) != JSON.stringify(projectUpdated);
  }

  static isValidProject(project: Project): boolean {
    return project != null && project.id != null && project.name != null && project.teamSize != null;
  }
}
