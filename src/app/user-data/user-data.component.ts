import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserFormDialogComponent } from '../user-form-dialog/user-form-dialog.component';
export interface UserElement {
  name: string;
  email: string;
  phone: number;
  dob: number;
}


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'dob'];
  USER_DATA: UserElement[] = [];
  dataSource = new MatTableDataSource<UserElement>(this.USER_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result.isCancel) {
        this.USER_DATA.push(result.data);
        this.dataSource = new MatTableDataSource<UserElement>(this.USER_DATA.reverse());
      }
    })
  }

}
