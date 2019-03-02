import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenlistComponent } from './departmenlist.component';

describe('DepartmenlistComponent', () => {
  let component: DepartmenlistComponent;
  let fixture: ComponentFixture<DepartmenlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmenlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
