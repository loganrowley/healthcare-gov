import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTransitionComponent } from './img-transition.component';

describe('ImgTransitionComponent', () => {
  let component: ImgTransitionComponent;
  let fixture: ComponentFixture<ImgTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
