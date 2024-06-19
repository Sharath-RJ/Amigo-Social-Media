import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../../../environment';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-trainer-profile-form',
  templateUrl: './trainer-profile-form.component.html',
  styleUrl: './trainer-profile-form.component.css',
})
export class TrainerProfileFormComponent {


    fullName: string = '';
    bio: string = '';
    specialization: string = '';
    experience: number = 0;
    qualifications: string = '';
    timeZone: string = '';
    hourlyRate: number = 0;
    
  
  showAddTimeSlotModal: boolean = false;
  timeSlots: { dayOfWeek: string; timeRange: string }[] = [];
  constructor(private _http: HttpClient, private _router: Router) {}

  openAddTimeSlotModal() {
    this.showAddTimeSlotModal = true;
  }

  closeAddTimeSlotModal() {
    this.showAddTimeSlotModal = false;
  }

  onTimeSlotAdded(slot: { dayOfWeek: string; timeRange: string }) {
    this.timeSlots.push(slot);
    this.closeAddTimeSlotModal();
  }
  profileData={
    fullName: this.fullName,
    bio: this.bio,
    specialization: this.specialization,
    experience:this.experience,
    qualifications: this.qualifications,
    timeZone: this.timeZone,
    hourlyRate: this.hourlyRate,
  }

  completeProfile() {
    console.log();
    this._http
      .post<{ profileComplete: boolean }>(
        `${environment.apiUrl}/trainer/completeProfile`,
        {
          fullName: this.fullName,
          bio: this.bio,
          specialization: this.specialization,
          experience: this.experience,
          qualifications: this.qualifications,
          timeZone: this.timeZone,
          hourlyRate: this.hourlyRate,
        }
      )
      .subscribe(
        (data) => {
          if (data.profileComplete) {
            this._router.navigate(['/TrainerDashboard']);
          }
        },
        (err) => {
          console.log(err);
        }
      );

  }
}
