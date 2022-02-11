import { ClientLocationsComponent } from '@admin/client-locations';
import { ComponentLoaderDirective } from '@admin/shared/directives/component-loader';
import { Message } from '@admin/shared/interfaces/message';
import { MenuItem } from '@admin/shared/models';
import { TaskPrioritiesComponent } from '@admin/task-priorities';
import { TaskStatusComponent } from '@admin/task-status';
import { ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CounriesComponent } from '../counries';
@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  menuItems: Array<MenuItem> = [
    {name: "Countries", label: "Countries", component: CounriesComponent},
    {name: "ClientLocations", label: "Client Locations", component: ClientLocationsComponent},
    {name: "TaskPriorities", label: "Task Priorities", component: TaskPrioritiesComponent},
    {name: "TaskStatus", label: "Task Status", component: TaskStatusComponent}
  ]

  currentItem!: MenuItem;
  tabs = new Set<MenuItem>();

  @ViewChildren(ComponentLoaderDirective)
  componentLoaders!: QueryList<ComponentLoaderDirective>;

  constructor(private componentFactory: ComponentFactoryResolver, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  onClickItem(item: MenuItem): void {
    this.currentItem = item;
    
    if (!this.tabs.has(item)) {
      this.tabs.add(item);
      this.cdr.detectChanges();
      this.onChange();
    }

  }

  private onChange() {
    const componentLoaderArray = this.componentLoaders.toArray();
    if (componentLoaderArray.length > 0) {
      const componentFactory = this.componentFactory.resolveComponentFactory(this.currentItem.component);
      const { viewContainerRef } = componentLoaderArray[this.tabs.size - 1];
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      this.setDefaultValueToComponent(componentRef);
    }
  }


  private setDefaultValueToComponent(component: ComponentRef<Message>): void {
    const { instance } = component;
    instance.setMessage(this.currentItem.label);
  }
}
