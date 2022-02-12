import { Component, Type, ViewContainerRef } from "@angular/core";
import { LoadableComponent } from "../interfaces/LoadableComponent";

export interface MenuItem {
    name: string;
    label: string;
    component: Type<LoadableComponent>;
    containerRef?: ViewContainerRef;
}