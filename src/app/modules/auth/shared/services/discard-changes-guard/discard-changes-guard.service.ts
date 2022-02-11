import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ValidateDiscardChanges } from '@auth/shared/interfaces/validate-discard-changes';
import { Observable } from 'rxjs';

@Injectable()
export class DiscardChangesGuardService implements CanDeactivate<ValidateDiscardChanges> {

  constructor() { }

  canDeactivate(component: ValidateDiscardChanges): boolean {
    let { canLeave } = component;

    if (!canLeave) {
      canLeave = confirm("Do you want to discard those changes?");
    }
    
    return canLeave;
  }
}
