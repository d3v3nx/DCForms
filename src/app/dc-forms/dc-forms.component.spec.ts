import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFormsComponent } from './dc-forms.component';

describe('DcFormsComponent', () => {
  let component: DcFormsComponent;
  let fixture: ComponentFixture<DcFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DcFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
