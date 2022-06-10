import { Station } from "./station";

export class Bus {
    busId !: number;
    busNo !:String;
    busFrom !:String;
    busTo !:String;
    arrivalDateTime !: any;
    departureDateTime !:any;
    busType !:String;
    seatType !:String;
    stations !:Station;
}
