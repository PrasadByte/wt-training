import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUser } from './get-user';

describe('GetUser', () => {
  let component: GetUser;
  let fixture: ComponentFixture<GetUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
