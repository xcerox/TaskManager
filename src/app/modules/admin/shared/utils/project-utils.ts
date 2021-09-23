import { Project } from "../models/project";

export class ProjectUtils {

  static objectToProject(object: any): Project {
    object["id"] = object.projectID;
    object["name"] = object.projectName;
    object["startDate"] = object.dateOfStart;
    delete object.projectID;
    delete object.projectName;
    delete object.dateOfStart;
    return object;
  }

  static projectToObject(project: Project): any {
    const object: any = { ...project };
    object["projectID"] = project.id;
    object["projectName"] = project.name;
    object["dateOfStart"] = project.startDate;
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
