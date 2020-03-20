import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMainViewComponent } from './content-main-view.component';

describe('ContentMainViewComponent', () => {
  let component: ContentMainViewComponent;
  let fixture: ComponentFixture<ContentMainViewComponent>;

  beforeEach(async(() => {
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
