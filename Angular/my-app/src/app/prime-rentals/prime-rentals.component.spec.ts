import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeRentalsComponent } from './prime-rentals.component';

describe('PrimeRentalsComponent', () => {
  let component: PrimeRentalsComponent;
  let fixture: ComponentFixture<PrimeRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeRentalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
