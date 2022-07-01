import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialogue',
  templateUrl: './delete-dialogue.component.html',
  styleUrls: ['./delete-dialogue.component.css']
})
export class DeleteDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogueComponent>) { }

  ngOnInit(): void {
  }

}
