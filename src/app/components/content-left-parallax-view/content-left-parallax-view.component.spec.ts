import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentLeftParallaxViewComponent } from './content-left-parallax-view.component';

describe('ContentLeftParallaxViewComponent', () => {
  let component: ContentLeftParallaxViewComponent;
  let fixture: ComponentFixture<ContentLeftParallaxViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLeftParallaxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLeftParallaxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
