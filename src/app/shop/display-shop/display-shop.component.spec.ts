import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShopComponent } from './display-shop.component';

describe('DisplayShopComponent', () => {
  let component: DisplayShopComponent;
  let fixture: ComponentFixture<DisplayShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
