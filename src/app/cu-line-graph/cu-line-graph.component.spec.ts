import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuLineGraphComponent } from './cu-line-graph.component';

describe('CuLineGraphComponent', () => {
  let component: CuLineGraphComponent;
  let fixture: ComponentFixture<CuLineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuLineGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
