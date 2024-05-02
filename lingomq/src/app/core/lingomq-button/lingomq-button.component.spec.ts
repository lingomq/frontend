import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LingomqButtonComponent } from './lingomq-button.component';

describe('LingomqButtonComponent', () => {
  let component: LingomqButtonComponent;
  let fixture: ComponentFixture<LingomqButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LingomqButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LingomqButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
