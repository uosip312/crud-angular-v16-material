import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHeroeDialogComponent } from './delete-heroe-dialog.component';

describe('DeleteHeroeDialogComponent', () => {
  let component: DeleteHeroeDialogComponent;
  let fixture: ComponentFixture<DeleteHeroeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteHeroeDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteHeroeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
