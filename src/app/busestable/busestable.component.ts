import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Station } from '../station';
import { StationService } from '../station.service';
import { MatCellDef } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddStationComponent } from '../add-station/add-station.component';
import { BusService } from '../bus.service';
import { Bus } from '../bus';
import { UpdateBusComponent } from '../update-bus/update-bus.component';
import { UpdateBusStationsComponent } from '../update-bus-stations/update-bus-stations.component';
import { CreateStationComponent } from '../create-station/create-station.component';
import { DeleteStationComponent } from '../delete-station/delete-station.component';

@Component({
  selector: 'app-busestable',
  templateUrl: './busestable.component.html',
  styleUrls: ['./busestable.component.css']
})
export class BusestableComponent implements OnInit, AfterViewInit {
  displayedColumns: String[] = ['id', 'busNo', 'busType', 'seatType', 'arrival', "departure", 'From', 'To','actions','editStation'];
  dataSource!: MatTableDataSource<Bus>;
  // allStations!: Station[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private busService: BusService,private dialog:MatDialog ) {
 
  }

  ngOnInit(): void {
    this.busService.getAllBusesStations().
      subscribe({
        next: (
          (data) => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log(data)
          }
        )
      });

      
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDeleteStation(busId: number) {
    this.busService.deleteBusById(busId).subscribe((data) => {
      console.log("deleted successfully");
      window.location.reload();
    })
    

}
edit(busId:number){
  console.log(busId)
  const dialogConfig = new MatDialogConfig()
  dialogConfig.data = {busId:busId}
  this.dialog.open(UpdateBusComponent, dialogConfig)
  console.log(dialogConfig.data)
}
editstation(busId:number){
  console.log(busId)
  const dialogConfig = new MatDialogConfig()
  dialogConfig.data = {busId:busId}
  this.dialog.open(UpdateBusStationsComponent, dialogConfig)
  console.log(dialogConfig.data)
}
createStation(busId:number){
  console.log(busId)
  const dialogConfig = new MatDialogConfig()
  dialogConfig.data = {busId:busId}
  this.dialog.open(CreateStationComponent, dialogConfig)
  console.log(dialogConfig.data)
}
onDeleteBUsStation(busId:number){
  console.log(busId)
  const dialogConfig = new MatDialogConfig()
  dialogConfig.data = {busId:busId}
  this.dialog.open(DeleteStationComponent, dialogConfig)
  console.log(dialogConfig.data)
}


}
