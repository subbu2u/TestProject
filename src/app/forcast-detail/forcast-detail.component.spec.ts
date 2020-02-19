import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastDetailComponent } from './forcast-detail.component';

describe('ForcastDetailComponent', () => {
  let component: ForcastDetailComponent;
  let fixture: ComponentFixture<ForcastDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcastDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
