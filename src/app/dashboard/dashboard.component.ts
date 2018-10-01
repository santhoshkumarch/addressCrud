import { Component, OnInit, Inject } from '@angular/core';
import { Address } from './../address';
import { HeroService } from '../hero.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  add_ress: Address[] = [];

  constructor(private heroService: HeroService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(add_ress => this.add_ress = add_ress);
  }
  editDialog(id: string): void{
    const dialogRef = this.dialog.open(EditModalComponent,{
      width: 'auto',
      height: '500px',
      data: { id }
    })
    console.log(id)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
  delete(address: Address): void {
    if(confirm("Are you sure to delete this")){
    this.add_ress = this.add_ress.filter(h => h !== address);
    this.heroService.deleteHero(address).subscribe();
    }
  }
}
