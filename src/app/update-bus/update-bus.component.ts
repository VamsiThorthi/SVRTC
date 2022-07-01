import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  errorMsg: any;

  busId: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private busService: BusService,private router:Router ) {
    this.busId = this.data.busId
    console.log(this.busId,"update")

  }
  ngOnInit(): void {
    // console.warn(this.activatedRouter.snapshot.params['id']);
    // this.busService.getBusById(this.activatedRouter.snapshot.params['id']).subscribe((data) => {
    //   console.log(data, "output");
    //   this.editbusForm = new FormGroup({
    //     busNo: new FormControl(data['busNo']),
    //     busType: new FormControl(data['busType']),
    //     seatType: new FormControl(data['seatType']),
    //     arrivalDateTime: new FormControl(data['arrivalDateTime']),
    //     departureDateTime: new FormControl(data['departureDateTime'])
    //   }
    //   )
    // })
    console.log(this.busId,"v")
    this.busService.getBusById(this.busId).subscribe((data) => {
      console.log(data, "output");
      this.editbusForm = new FormGroup({
        busNo: new FormControl(data['busNo'], [Validators.required]),
        busType: new FormControl(data['busType'], [Validators.required]),
        seatType: new FormControl(data['seatType'], [Validators.required]),
        arrivalDateTime: new FormControl(data['arrivalDateTime'], [Validators.required]),
        departureDateTime: new FormControl(data['departureDateTime'], [Validators.required])
      }
      )
    })
  }

  editbusForm = new FormGroup({
    busNo: new FormControl('', [Validators.required]),
    busType: new FormControl('', [Validators.required]),
    seatType: new FormControl('', [Validators.required]),
    arrivalDateTime: new FormControl('', [Validators.required]),
    departureDateTime: new FormControl('', [Validators.required])
  }
  )

  // onSubmit() {
  //   console.warn(this.busForm.value);
  //   this.busService.createBusDetails(this.busForm.value).subscribe(
  //     data => {this.data = true;window.location.reload();},
  //     err => (this.errorMsg = <any>err.error,
  //       this.data = false)
  //   );
  // }
  get busNo() {
    return this.editbusForm.get('busNo');
  }
  get busType() {
    return this.editbusForm.get('busType');
  }
  get seatType() {
    return this.editbusForm.get('seatType');
  }
  get busArrival() {
    return this.editbusForm.get('busArrival');
  }
  get busDeparture() {
    return this.editbusForm.get('busDeparture');
  }
  collection() {
    console.warn(this.editbusForm.value);
    this.busService.updateBus(this.busId, this.editbusForm.value).subscribe((data) => {
      console.log(data, "result");
      
    })
   
    window.location.reload();

  }

  onback(){
    window.location.reload();
  }
}