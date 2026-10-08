import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MollywoodmodeComponent } from './mollywoodmode.component';

describe('MollywoodmodeComponent', () => {
  let component: MollywoodmodeComponent;
  let fixture: ComponentFixture<MollywoodmodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MollywoodmodeComponent]
    });
    fixture = TestBed.createComponent(MollywoodmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
