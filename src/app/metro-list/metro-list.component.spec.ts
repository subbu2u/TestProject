import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroListComponent } from './metro-list.component';

describe('MetroListComponent', () => {
  let component: MetroListComponent;
  let fixture: ComponentFixture<MetroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
