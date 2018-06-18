import { TestBed, inject } from '@angular/core/testing';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthGuardService } from 'shared/services/auth-guard.service';

xdescribe('AdminAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuardService, AuthGuardService]
    });
  });

  it('should be created', inject([AdminAuthGuardService], (service: AdminAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
