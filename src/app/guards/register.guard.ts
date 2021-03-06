import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { SettingsService } from '../services/settings.service';



@Injectable()
export class RegisterGuard implements CanActivate {

  constructor(
    private settingsService: SettingsService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.settingsService.getSettings().allowRegistration) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    };
  }
}
