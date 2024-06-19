  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { environment } from '../../../../../environment';
import { User } from '../../user-list/user-list.component';
interface ProfileData {
  fullName: string;
  bio: string;
  specialization: string;
  experience: number;
  qualifications: string;
  timeZone: string;
  hourlyRate: number;
  profilePic:string
}


  @Component({
    selector: 'app-trainer-dashboard',
    templateUrl: './trainer-dashboard.component.html',
    styleUrl: './trainer-dashboard.component.css'
  })
  export class TrainerDashboardComponent implements OnInit {
    constructor(private _http: HttpClient) { }
    profileData:ProfileData={
    profilePic:'',
    fullName:'',
    bio:'',
    specialization:'',
    experience:0,
    qualifications: '',
    timeZone:'',
    hourlyRate:0
    }
      ngOnInit(): void {
        this._http.get<ProfileData>(`${environment.apiUrl}/trainer/Dashboard`).subscribe((data)=>{
          console.log(data)
          this.profileData=data
        }, (err)=>{
          console.log(err)
        })
      }
  }
