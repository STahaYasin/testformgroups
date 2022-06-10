import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemagiccomponentComponent } from './themagiccomponent.component';

describe('ThemagiccomponentComponent', () => {
  let component: ThemagiccomponentComponent;
  let fixture: ComponentFixture<ThemagiccomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemagiccomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemagiccomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
