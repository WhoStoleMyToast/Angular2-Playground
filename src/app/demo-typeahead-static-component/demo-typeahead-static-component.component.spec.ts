import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypeaheadStaticComponentComponent } from './demo-typeahead-static-component.component';

describe('DemoTypeaheadStaticComponentComponent', () => {
  let component: DemoTypeaheadStaticComponentComponent;
  let fixture: ComponentFixture<DemoTypeaheadStaticComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypeaheadStaticComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypeaheadStaticComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
