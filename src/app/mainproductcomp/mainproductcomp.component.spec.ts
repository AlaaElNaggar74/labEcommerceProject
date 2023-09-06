import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainproductcompComponent } from './mainproductcomp.component';

describe('MainproductcompComponent', () => {
  let component: MainproductcompComponent;
  let fixture: ComponentFixture<MainproductcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainproductcompComponent]
    });
    fixture = TestBed.createComponent(MainproductcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
