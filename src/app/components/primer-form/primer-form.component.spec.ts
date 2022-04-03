import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFormComponent } from './primer-form.component';

describe('PrimerFormComponent', () => {
  let component: PrimerFormComponent;
  let fixture: ComponentFixture<PrimerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
