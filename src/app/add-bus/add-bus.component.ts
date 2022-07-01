
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';


@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  errorMsg: any;
  data = false;

  constructor(private busService: BusService,
    private router: Router) {


  }
  ngOnInit(): void {
  }

  busForm = new FormGroup({
    busNo: new FormControl('', [Validators.required]),
    busType: new FormControl('', [Validators.required]),
    seatType: new FormControl('', [Validators.required]),
    arrivalDateTime: new FormControl('', [Validators.required]),
    departureDateTime: new FormControl('', [Validators.required])
  }
  )

  onSubmit() {
    console.warn(this.busForm.value);
    this.busService.createBusDetails(this.busForm.value).subscribe(
      data => {
        this.data = true; 
        this.router.navigate(['/busStation'])
      },
      err => (this.errorMsg = <any>err.error,
        this.data = false)
    );
  }
  get busNo() {
    return this.busForm.get('busNo');
  }
  get busType() {
    return this.busForm.get('busType');
  }
  get seatType() {
    return this.busForm.get('seatType');
  }
  get busArrival() {
    return this.busForm.get('busArrival');
  }
  get busDeparture() {
    return this.busForm.get('busDeparture');
  }


}



