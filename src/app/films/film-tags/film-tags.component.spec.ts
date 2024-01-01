import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTagsComponent } from './film-tags.component';

describe('FilmTagsComponent', () => {
  let component: FilmTagsComponent;
  let fixture: ComponentFixture<FilmTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
