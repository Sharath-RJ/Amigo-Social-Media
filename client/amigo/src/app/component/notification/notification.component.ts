// notification.component.ts

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {

  notifications: any[] = [];

  constructor(private _http:HttpClient) {}

  ngOnInit(): void {
    this._http.get<any[]>(`http://localhost:5000/api/notification/getAllNotifications`).subscribe(
      (data) => {
        this.notifications = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
