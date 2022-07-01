import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-created-successfully',
  templateUrl: './created-successfully.component.html',
  styleUrls: ['./created-successfully.component.css']
})
export class CreatedSuccessfullyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    window.location.reload();
  }
}
