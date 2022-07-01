
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Station } from '../station';
import { StationService } from '../station.service';
import { MatCellDef } from '@angular/material/table';
import { MatDialog, MatDialogConfig,MatDialogRef } from '@angular/material/dialog';
import { AddStationComponent } from '../add-station/add-station.component';
import { UpdateStationComponent } from '../update-station/update-station.component';
import { DeleteDialogueComponent } from '../delete-dialogue/delete-dialogue.component';


@Component({
  selector: 'app-table-overview-example',
  templateUrl: './table-overview-example.component.html',
  styleUrls: ['./table-overview-example.component.css']
})


export class TableOverviewExampleComponent implements OnInit, AfterViewInit {

  allStations$: Observable<Station> | undefined;

  displayedColumns: String[] = ['id', 'stationName', 'stationDistrict', 'actions'];
  dataSource!: MatTableDataSource<Station>;
  allStations!: Station[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  stationName: any;
  stationDistrict: any;

  constructor(private stationService: StationService,
   private dialog:MatDialog) {

  }

  ngOnInit(): void {
    this.stationService.getStationDetails().
      subscribe({
        next: (
          (data) => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        )
      });

  }

  getAllStations() {

    this.stationService.getStationDetails().
      subscribe({
        next: (
          (data) => {
            this.dataSource = new MatTableDataSource(data);
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

  onDeleteStation(stationId: number) {
    console.log(stationId)
    this.stationService.deleteStationById(stationId).subscribe((data) => {
      console.log("deleted successfully");
      window.location.reload();
    })

  }

  edit(stationId:number){

    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {stationId:stationId}
    this.dialog.open(UpdateStationComponent, dialogConfig)

  }

  
  


}