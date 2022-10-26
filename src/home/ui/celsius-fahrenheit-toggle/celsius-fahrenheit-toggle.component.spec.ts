import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelsiusFahrenheitToggleComponent } from './celsius-fahrenheit-toggle.component';

describe('CelsiusFahrenheitToggleComponent', () => {
  let component: CelsiusFahrenheitToggleComponent;
  let fixture: ComponentFixture<CelsiusFahrenheitToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelsiusFahrenheitToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelsiusFahrenheitToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
