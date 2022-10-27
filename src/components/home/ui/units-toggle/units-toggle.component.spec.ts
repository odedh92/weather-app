import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsToggleComponent } from './units-toggle.component';

describe('UnitsToggleComponent', () => {
  let component: UnitsToggleComponent;
  let fixture: ComponentFixture<UnitsToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
