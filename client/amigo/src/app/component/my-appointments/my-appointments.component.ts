import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environment';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css',
})
export class MyAppointmentsComponent implements OnInit {
  constructor(private _http: HttpClient) {}
  myAppointments: any[] = [];
  p: number = 1;
  totalUsers: any;

  ngOnInit(): void {
    // get all my appointments

    this._http
      .get<any[]>(`${environment.apiUrl}/user/getMyAppointments`)
      .subscribe(
        (data) => {
          this.myAppointments = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  joinMeet(link: string) {
    window.open(link, '_blank');
  }
}
