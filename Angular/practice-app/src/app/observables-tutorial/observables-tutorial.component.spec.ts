import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesTutorialComponent } from './observables-tutorial.component';

describe('ObservablesTutorialComponent', () => {
  let component: ObservablesTutorialComponent;
  let fixture: ComponentFixture<ObservablesTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
