import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route, Params } from '@angular/router';

@Component({
  selector: 'app-intermediatestations',
  templateUrl: './intermediatestations.component.html',
  styleUrls: ['./intermediatestations.component.css']
})
export class IntermediatestationsComponent implements OnInit {
  stations: any;
  params: any;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.stations =JSON.parse(this.activatedRouter.snapshot.params['busStations']);
  }

  onBack(){
    this.router.navigate(['/bus-label'])
  }
}
