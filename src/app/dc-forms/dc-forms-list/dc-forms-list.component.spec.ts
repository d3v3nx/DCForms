import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFormsListComponent } from './dc-forms-list.component';

describe('DcFormsListComponent', () => {
  let component: DcFormsListComponent;
  let fixture: ComponentFixture<DcFormsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DcFormsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcFormsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
