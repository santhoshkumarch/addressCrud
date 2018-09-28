import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
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
  delete(hero: Hero): void {
    if(confirm("Are you sure to delete this")){
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    }
  }
}
