import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentMainViewComponent } from './content-main-view.component';

describe('ContentMainViewComponent', () => {
  let component: ContentMainViewComponent;
  let fixture: ComponentFixture<ContentMainViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
