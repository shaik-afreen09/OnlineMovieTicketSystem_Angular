import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecityComponent } from './updatecity.component';

describe('UpdatecityComponent', () => {
  let component: UpdatecityComponent;
  let fixture: ComponentFixture<UpdatecityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
