import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | import('rxjs').Observable<boolean> | Promise<boolean>;
}

export const UnsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
