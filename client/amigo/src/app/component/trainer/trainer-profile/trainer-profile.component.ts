import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environment';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrl: './trainer-profile.component.css',
})
export class TrainerProfileComponent implements OnInit {
  trainerId!: string | null;
  trainerProfile: any;

  constructor(private _http: HttpClient, private _route: ActivatedRoute) {}
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
    console.log(slot);
    this.selectedSlot = slot;
  }

  bookNow(){
    if(!this.selectedSlot){return}
    this._http.post(`${environment.apiUrl}/trainer/bookNow`, {slot: this.selectedSlot, trainerId: this.trainerId}).subscribe((data)=>{
      console.log(data)
    },(err)=>{
      console.log(err)
    })
  }
}
