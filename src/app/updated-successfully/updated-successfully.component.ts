import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updated-successfully',
  templateUrl: './updated-successfully.component.html',
  styleUrls: ['./updated-successfully.component.css']
})
export class UpdatedSuccessfullyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    window.location.reload();
  }

}
