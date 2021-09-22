import { Component, OnInit } from '@angular/core';
import { TeamMemberSummary } from '@admin/model/team-member-summary';
import { DashboardService } from '@admin/service/dashboard.service'
import { TeamMember } from '@admin/model/team-member';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {}

  designation!: string;
  username!: string;
  noOfTeamMembers!: number;
  totalCostOfAllProjects!: number;
  pendingTasks!: number;
  upComingProjects!: number;
  projectCost!: number;
  currentExpenditure!: number;
  availableFunds!: number;

  clients!: Array<string>;
  projects!: Array<string>;
  years!: Array<number>;
  teamMembersSummary!: Array<TeamMemberSummary>;
  teamMembers!: Array<TeamMember>;

  ngOnInit(): void {
    this.designation = "Team Leader";
    this.username = "John Smith";
    this.noOfTeamMembers = 67;
    this.totalCostOfAllProjects = 240;
    this.pendingTasks = 15;
    this.upComingProjects = 2;
    this.projectCost = 2113507;
    this.currentExpenditure = 96788;
    this.availableFunds = 52536;

    this.clients = this.dashboardService.getClients();
    this.projects = this.dashboardService.getProjects();
    this.years = this.dashboardService.getYears();
    this.teamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.teamMembers = this.dashboardService.getTeamMembers();
  }

  onProjectChange($event:any): void {
    console.log($event.target.innerHTML);
  }

}
