import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroe } from 'src/app/core/interface/heroe';

@Component({
  selector: 'app-delete-heroe-dialog',
  templateUrl: './delete-heroe-dialog.component.html',
  styleUrls: ['./delete-heroe-dialog.component.css']
})
export class DeleteHeroeDialogComponent {

  constructor(
    public dialog: MatDialogRef<DeleteHeroeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: Heroe,
  ) { }

  cerrarDialog(): void {
    this.dialog.close(false);
  }

  confirmar(): void {
    this.dialog.close(true);
  }
}
