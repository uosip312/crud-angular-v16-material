import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Heroe } from 'src/app/core/interface/heroe';
import { SuperheroesService } from 'src/app/core/service/superheroes.service';

@Component({
  selector: 'app-heroe-form',
  templateUrl: './heroe-form.component.html',
  styleUrls: ['./heroe-form.component.css']
})
export class HeroeFormComponent implements OnInit {

  heroForm!: FormGroup;
  heroId: string = '';
  formMode: string = '';
  constructor(
    private superHeroeSvc: SuperheroesService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.heroId = this.route.snapshot.params['id'];
    if(this.heroId) {
      this.patchForm(this.heroId);
      this.heroForm.controls['id'].addValidators([Validators.required]);
      this.heroForm.controls['id'].updateValueAndValidity();
    }
    this.superHeroeSvc.getFormMode().subscribe( mode => this.formMode = mode);
  }

  buildForm(): void {
   this.heroForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  patchForm(id: string): void {
    const hero = this.superHeroeSvc.getSuperHeroeById(id);
    this.heroForm.patchValue({
      ...hero,
    });
  }

  get formValues() { return this.heroForm?.controls; }

  onSubmit(): void {
    if(this.heroForm.valid) {
      const hero = this.heroForm.value as Heroe;
      if(this.heroId) {
        this.superHeroeSvc.updateSuperHeroe(hero)
      } else {
        this.superHeroeSvc.addSuperHeroe(hero);
      }
      this.router.navigate(['/superheroes']);
    }
  }

  onCancel(): void {
    this.heroForm.reset();
    this.router.navigate(['/superheroes']);
  }

}
