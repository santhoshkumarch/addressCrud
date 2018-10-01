import { Component, OnInit,Inject, Input, ViewChild, TemplateRef, NgZone } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

import { Address }         from './../address';
import { HeroService }  from '../hero.service';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @ViewChild('modalContentTemplate')
  modalContent: TemplateRef<any>
  @Input() address: Address;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private location: Location,
    public lc: NgZone,
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.getHero(this.data.id);
  }
  getHero(id): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.heroService.getHero(id)
      .subscribe(address => this.address = address);
  }
  onNoClick(): void {
    this.dialogRef.close()
  }
  goBack(): void {
    this.location.back();
  }
  onClickOk() {
    this.heroService.updateHero(this.address)
    .subscribe(() => this.goBack());
    console.log(this.address)
}
}
