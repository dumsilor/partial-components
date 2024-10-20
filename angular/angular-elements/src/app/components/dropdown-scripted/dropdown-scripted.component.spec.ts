import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownScriptedComponent } from './dropdown-scripted.component';

describe('DropdownScriptedComponent', () => {
  let component: DropdownScriptedComponent;
  let fixture: ComponentFixture<DropdownScriptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownScriptedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownScriptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
