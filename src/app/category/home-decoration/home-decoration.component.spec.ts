import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDecorationComponent } from './home-decoration.component';

describe('HomeDecorationComponent', () => {
  let component: HomeDecorationComponent;
  let fixture: ComponentFixture<HomeDecorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDecorationComponent]
    });
    fixture = TestBed.createComponent(HomeDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
