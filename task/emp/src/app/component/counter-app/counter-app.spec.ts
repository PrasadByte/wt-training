import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterApp } from './counter-app';

describe('CounterApp', () => {
  let component: CounterApp;
  let fixture: ComponentFixture<CounterApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
