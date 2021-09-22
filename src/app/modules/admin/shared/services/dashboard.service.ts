import { Injectable } from '@angular/core';
import { TeamMember } from '@admin/model/team-member';
import { TeamMemberSummary } from '@admin/model/team-member-summary';

@Injectable()
export class DashboardService {

  getTeamMembersSummary(): Array<TeamMemberSummary> {
    return [
      {region: "East", count: 20, temporarilyUnavailable: 4},
      {region: "West", count: 15, temporarilyUnavailable: 8},
      {region: "South", count: 17, temporarilyUnavailable: 1},
      {region: "North", count: 15, temporarilyUnavailable: 6}
    ];
  }

  getClients(): Array<string> {
    return ["ABC Infotech Ltd.", "DEF Software Soluctions", "GHI Industries"];
  }

  getProjects(): Array<string> {
    return ["Project A", "Project B", "Project C", "Project D"];
  }

  getYears(): Array<number> {
    return [2019, 2018, 2017, 2016];
  }

  getTeamMembers(): Array<TeamMember> {
    return [
      {
        region: 'East',
        members: [
          { id: 1, name: 'Ford', status: 'Available' },
          { id: 2, name: 'Miller', status: 'Available' },
          { id: 3, name: 'Jones', status: 'Busy' },
          { id: 4, name: 'James', status: 'Busy' },
        ],
      },
      {
        region: 'West',
        members: [
          { id: 5, name: 'Anna', status: 'Available' },
          { id: 6, name: 'Arun', status: 'Available' },
          { id: 7, name: 'Varun', status: 'Busy' },
          { id: 8, name: 'Jasmine', status: 'Busy' },
        ],
      },
      {
        region: 'South',
        members: [
          { id: 9, name: 'Krishna', status: 'Available' },
          { id: 10, name: 'Mohan', status: 'Available' },
          { id: 11, name: 'Raju', status: 'Busy' },
          { id: 12, name: 'Farooq', status: 'Busy' },
        ],
      },
      {
        region: 'North',
        members: [
          { id: 13, name: 'Jacob', status: 'Available' },
          { id: 14, name: 'Smith', status: 'Available' },
          { id: 15, name: 'Jones', status: 'Busy' },
          { id: 16, name: 'James', status: 'Busy' },
        ],
      },
    ];
  }
}
