import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsComponent } from './admin-products.component';
import { CoreModule } from '../../../core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { FilterCategories } from '../../../pipes/category.filter.pipe';
import { RouterModule } from '@angular/router';

xdescribe('AdminProductsComponent', () => {
  let component: AdminProductsComponent;
  let fixture: ComponentFixture<AdminProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterModule,
      ],
      declarations: [
        AdminProductsComponent,
        FilterCategories
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
