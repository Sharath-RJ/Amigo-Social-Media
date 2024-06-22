import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environment';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent implements OnInit {
  constructor(private _http:HttpClient){}
  progress:any[]=[]

  ngOnInit(): void {
    this._http.get<any[]>(`${environment.apiUrl}/user/loadProgress`).subscribe((data)=>{
      this.progress=data
    }, (err)=>{
      console.log(err)
    })
  }
}
