import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLableTabComponent } from './scroll-lable-tab.component';

describe('ScrollLableTabComponent', () => {
  let component: ScrollLableTabComponent;
  let fixture: ComponentFixture<ScrollLableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollLableTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollLableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
