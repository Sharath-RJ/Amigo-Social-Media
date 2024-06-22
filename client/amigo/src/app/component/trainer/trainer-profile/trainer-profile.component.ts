import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrl: './trainer-profile.component.css',
})
export class TrainerProfileComponent implements OnInit {
  trainerId!: string | null;
  trainerProfile: any;

  constructor(
    private _http: HttpClient,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  selectedSlot!: any;
  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this.trainerId = params.get('id');
    });

    //getting trainer profile

    this._http
      .get(`${environment.apiUrl}/trainer/getTrainerProfile/${this.trainerId}`)
      .subscribe(
        (data) => {
          console.log(data);
          this.trainerProfile = data;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  selectSlot(slot: string) {
    console.log("slooot",slot);
    this.selectedSlot = slot;
  }

  bookNow() {
    if (!this.selectedSlot) {
      return;
    }
    this._http
      .post(`${environment.apiUrl}/trainer/bookNow`, {
        slot: this.selectedSlot,
        trainerId: this.trainerId,
      })
      .subscribe(
        (data) => {
          console.log(data);
          this._http.patch(`${environment.apiUrl}/trainer/updateSlot/${this.selectedSlot._id}`, {status: 'booked'}).subscribe((data)=>{
            console.log(data);
            this._snackBar.open('Appointment Booked Successfully', '', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          }, (err)=>{
          console.log(err);
          })
         
        },
        (err) => {
          console.log(err);
        }
      );
  }

  isBooked(slot: any): boolean {
    return slot.status === 'booked';
  }
}
