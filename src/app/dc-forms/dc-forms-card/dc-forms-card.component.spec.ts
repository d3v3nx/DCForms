import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFormsCardComponent } from './dc-forms-card.component';

describe('DcFormsCardComponent', () => {
  let component: DcFormsCardComponent;
  let fixture: ComponentFixture<DcFormsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DcFormsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcFormsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
