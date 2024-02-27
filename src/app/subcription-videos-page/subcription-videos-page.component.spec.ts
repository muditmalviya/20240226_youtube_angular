import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionVideosPageComponent } from './subcription-videos-page.component';

describe('SubcriptionVideosPageComponent', () => {
  let component: SubcriptionVideosPageComponent;
  let fixture: ComponentFixture<SubcriptionVideosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcriptionVideosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubcriptionVideosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
