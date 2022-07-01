import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedSuccessfullyComponent } from './created-successfully.component';

describe('CreatedSuccessfullyComponent', () => {
  let component: CreatedSuccessfullyComponent;
  let fixture: ComponentFixture<CreatedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedSuccessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
