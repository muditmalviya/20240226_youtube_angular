import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSubComponent } from './main-sub.component';

describe('MainSubComponent', () => {
  let component: MainSubComponent;
  let fixture: ComponentFixture<MainSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
