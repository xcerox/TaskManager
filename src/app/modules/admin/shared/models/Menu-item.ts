import { Component, Type } from "@angular/core";
import { Message } from "../interfaces/message";

export interface MenuItem {
    name: string;
    label: string;
    component: Type<Message>;
}