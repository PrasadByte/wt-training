import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeUser } from './ge-user';

describe('GeUser', () => {
  let component: GeUser;
  let fixture: ComponentFixture<GeUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
