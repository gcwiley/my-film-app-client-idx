import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// import angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// import the film service
import { FilmService } from '../../services/film.service';

// import the film interfaces
import { Film, Genre } from '../../types/film.interface';

// import the data values
import { GENRES } from '../../../assets/data/film-data';

@Component({
   selector: 'app-film-form',
   templateUrl: './film-form.component.html',
   styleUrl: './film-form.component.scss',
   standalone: true,
   imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      FormsModule,
      ReactiveFormsModule,
   ],
})
export class FilmFormComponent implements OnInit {
   private mode = 'create';
   private id!: string | null;
   private film!: Film;

   genre: Genre[] = GENRES;

   constructor(private formBuilder: FormBuilder, private router: Router, public route: ActivatedRoute, private filmService: FilmService) {}

   // create the film form
   filmForm = this.formBuilder.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      releaseDate: ['', Validators.required],
      genre: ['', Validators.required],
      summary: ['', Validators.required],
   });

   ngOnInit(): void {
      // find out if we have a "id" or not
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
         if (paramMap.has('id')) {
            this.mode = 'edit';
            this.id = paramMap.get('id');
            this.filmService.getFilm(this.id).subscribe((film) => {
               this.film = film;
               // overrides values of initial form controls
               this.filmForm.setValue({
                  // set value for every form control
                  title: this.film.title,
                  director: this.film.director,
                  releaseDate: this.film.releaseDate,
                  genre: this.film.genre,
                  summary: this.film.summary,
               });
            });
         } else {
            this.mode = 'create';
            this.id = null;
         }
      });
   }

   onSaveFilm(): void {
      if (this.mode === 'create') {
         this.filmService.addFilm(this.filmForm.value).subscribe(() => {
            // navigates user back to homepage
            this.router.navigateByUrl('/');
         });
      } else {
         this.filmService.updateFilm(this.id!, this.filmForm.value).subscribe(() => {
            // navigates user back to homepage
            this.router.navigateByUrl('/');
         });
      }
   }
}
