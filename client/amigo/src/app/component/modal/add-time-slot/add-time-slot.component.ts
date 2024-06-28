import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-time-slot',
  templateUrl: './add-time-slot.component.html',
  styleUrls: ['./add-time-slot.component.css'],
})
export class AddTimeSlotComponent {
  dayOfWeek: string = '';
  startTime: Date = new Date();
  endTime: Date = new Date();

  @Output() timeSlotAdded = new EventEmitter<{
    dayOfWeek: string;
    startTime: Date;
    endTime: Date;
  }>();
  @Output() closeModalEvent = new EventEmitter<void>();

  addTimeSlot() {
    this.timeSlotAdded.emit({
      dayOfWeek: this.dayOfWeek,
      startTime: this.startTime,
      endTime: this.endTime,
    });
    this.closeModal();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}
