import { ClientLocationsComponent } from '@admin/client-locations';
import { ComponentLoaderDirective } from '@admin/shared/directives/component-loader';
import { LoadableComponent } from '@admin/shared/interfaces/LoadableComponent';
import { MenuItem } from '@admin/shared/models';
import { TaskPrioritiesComponent } from '@admin/task-priorities';
import { TaskStatusComponent } from '@admin/task-status';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CountriesComponent } from '../countries';
@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  menuItems: Array<MenuItem> = [
    {name: "Countries", label: "Countries", component: CountriesComponent},
    {name: "ClientLocations", label: "Client Locations", component: ClientLocationsComponent},
    {name: "TaskPriorities", label: "Task Priorities", component: TaskPrioritiesComponent},
    {name: "TaskStatus", label: "Task Status", component: TaskStatusComponent}
  ]

  currentItem!: MenuItem;
  tabs = new Set<MenuItem>();

  @ViewChildren(ComponentLoaderDirective)
  componentLoaders!: QueryList<ComponentLoaderDirective>;

  constructor(private componentFactory: ComponentFactoryResolver) {}

  ngOnInit(): void {
  }

  onClickItem(item: MenuItem): void {
    this.currentItem = item;

    if (!this.tabs.has(item)) {
      this.tabs.add(item);
      setTimeout(() => this.onChange(), 100);
    }
    
  }

  private onChange(): void {
    const componentLoaderArray = this.componentLoaders.toArray();
    const componentFactory = this.componentFactory.resolveComponentFactory(this.currentItem.component);
    const { viewContainerRef } = componentLoaderArray[this.tabs.size - 1];
    this.currentItem.containerRef = viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.setDefaultValueToComponent(componentRef);
  }

  private setDefaultValueToComponent(component: ComponentRef<LoadableComponent>): void {
    const { instance } = component;
  }

  onclose(tab: MenuItem): void {
    tab.containerRef?.remove();
    this.tabs.delete(tab);
    if (tab == this.currentItem) {
      this.currentItem = <MenuItem>{};
    }
  }
}
