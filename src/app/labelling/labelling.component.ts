import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import * as moment from 'moment';
import { Router ,Route, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-labelling',
  templateUrl: './labelling.component.html',
  styleUrls: ['./labelling.component.css']
})
export class LabellingComponent implements OnInit {
  output: any;
  timedifference: any;
  days: any;

  busesList = [{
    arrivalDateTime: "2022-06-07T10:39:00",
    busId: 1,
    busNo: "TS04AH5050",
    busStations: [{ stationId: 1, stationName: 'Palvancha', stationDistrict: 'Bhadradri Kothagudem' }, { stationId: 2, stationName: 'Eturunagaram', stationDistrict: 'Jayashankar Bhoopalpally' }],
    busType: "Public",
    departureDateTime: "2022-06-07T13:45:00",
    seatType: "Chair"
  },
  {
    arrivalDateTime: "2022-06-08T10:39:00",
    busId: 3,
    busNo: "TS04AH3030",
    busStations: [{ stationId: 1, stationName: 'Palvancha', stationDistrict: 'Bhadradri Kothagudem' },
    { stationId: 2, stationName: 'Eturunagaram', stationDistrict: 'Jayashankar Bhoopalpally' },
    { stationId: 3, stationName: 'Manuguru', stationDistrict: 'Bhadradri Kothagudem' }],
    busType: "Private",
    departureDateTime: "2022-06-08T13:45:00",
    seatType: "Sleeper"
  }
  ]

  constructor(private busService: BusService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getResultList()
  }

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['/fromTo'])
  }

  getResultList() {
    console.log(this.busService.ResultList)
    this.output = this.busService.ResultList
  }

  intermediateSations(busStations: any) {
    console.log(busStations)
    this.busService.ResultList = busStations
    // this.router.navigateByUrl('/next')
    this.router.navigate(['/next', { busStations: JSON.stringify(busStations) }], { relativeTo: this.activatedRoute })
  }

  dateTimefunc(arrivalDateTime: any, departureDateTime: any) {
    //let diffMs = (arrivalDateTime - departureDateTime); // milliseconds

    const difference = moment(departureDateTime, "YYYY-MM-DD HH:mm:ss").diff(moment(arrivalDateTime, "YYYY-MM-DD HH:mm:ss"))
    //console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes");
    let diffDays = Math.floor(difference / 86400000); // days
    let diffHrs = Math.floor((difference % 86400000) / 3600000); // hours
    let diffMins = Math.round(((difference % 86400000) % 3600000) / 60000); // minutes

    if (diffDays >= 1) {
      this.timedifference = diffDays + "d " + diffHrs + "h " + diffMins + "m"
    } else {
      this.timedifference = diffHrs + "h " + diffMins + "m"
    }
    this.days = diffDays
  }

}
