import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    template: ''
  })
export abstract class BaseComponent implements OnDestroy {
    onDestroy$: Subject<boolean>;

    constructor() {
        this.onDestroy$ = new Subject<boolean>();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
