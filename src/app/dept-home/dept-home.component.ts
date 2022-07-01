import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-home',
  templateUrl: './dept-home.component.html',
  styleUrls: ['./dept-home.component.css']
})
export class DeptHomeComponent implements OnInit {

  addBusClicked=false;
  busesListClicked=false;
  addStationClicked=false;
  stationListClicked=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onAddBus(){
    this.addBusClicked=true;
    this.busesListClicked=false;
    this.addStationClicked=false;
    this.stationListClicked=false;
  }

  onBusTable(){
    this.busesListClicked=true;
    this.addBusClicked=false;
    this.addStationClicked=false;
    this.stationListClicked=false;

  }
 
  addStation(){
    this.addBusClicked=false;
    this.busesListClicked=false;
    this.addStationClicked=true;
    this.stationListClicked=false;
  }

  onStationTable(){
    this.busesListClicked=false;
    this.addBusClicked=false;
    this.addStationClicked=false;
    this.stationListClicked=true;

  }
  onLogout(){
    this.router.navigate(['/'])
  }
  onClick(){
    this.router.navigate(['/dept-home'])
  }
}
