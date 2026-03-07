import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

@Injectable({ providedIn: 'root' })
export class ResetPasswordGuard implements CanActivate {
  constructor(
    private supabase: SupabaseService,
    private router: Router,
  ) {}

  async canActivate(): Promise<boolean> {
    const { data } = await this.supabase.getSession();

    if (data.session) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
