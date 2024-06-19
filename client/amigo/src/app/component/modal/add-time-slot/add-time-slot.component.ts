import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-time-slot',
  templateUrl: './add-time-slot.component.html',
  styleUrl: './add-time-slot.component.css'
})
export class AddTimeSlotComponent {
 dayOfWeek: string = '';
  timeRange: string = '';

  @Output() timeSlotAdded = new EventEmitter<{ dayOfWeek: string, timeRange: string }>();
  @Output() closeModalEvent = new EventEmitter<void>();

  addTimeSlot() {
    this.timeSlotAdded.emit({ dayOfWeek: this.dayOfWeek, timeRange: this.timeRange });
    this.closeModal();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}
