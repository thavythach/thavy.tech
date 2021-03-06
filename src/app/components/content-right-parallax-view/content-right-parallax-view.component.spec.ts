import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentRightParallaxViewComponent } from './content-right-parallax-view.component';

describe('ContentRightParallaxViewComponent', () => {
  let component: ContentRightParallaxViewComponent;
  let fixture: ComponentFixture<ContentRightParallaxViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentRightParallaxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRightParallaxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
