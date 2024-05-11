import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicPopupComponent } from './comic-popup.component';

describe('ComicPopupComponent', () => {
  let component: ComicPopupComponent;
  let fixture: ComponentFixture<ComicPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
