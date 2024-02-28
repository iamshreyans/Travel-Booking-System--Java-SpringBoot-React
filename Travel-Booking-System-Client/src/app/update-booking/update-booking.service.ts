import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateBookingService {
  private baseUrl = "http://localhost:8081/api/v1";

  constructor(private http: HttpClient) { }

  updateBooking(booking: any): Observable<any> {
    let bookingId = booking.id;
    return this.http.put(`${this.baseUrl}/bookings/update/${bookingId}`, booking, { responseType: 'text' }) as Observable<any>;
  }

  getAllBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings/all`) as Observable<any>;
  }
}
