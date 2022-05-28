import { Component, OnInit, Injectable } from '@angular/core';
import {LoginComponent} from 'src/app/login/login.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog()
  {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',height:'550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
