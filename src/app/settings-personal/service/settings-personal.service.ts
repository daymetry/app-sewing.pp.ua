import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
    providedIn: 'root',
})
export class SettingsPersonalService {

    public apiUrl = 'http://localhost:3000';
    public headers = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic ',
            'Cache-Control': 'no-cache'
        }
    };


    constructor(private http: HttpClient) {}
    // Create
    // createTask(data: any): Observable<any> {
    //     const API_URL = `${this.apiUrl}/create-task`;
    //     return this.http.post(API_URL, data).pipe(catchError(this.error));
    // }


    // Read
    getPosition() {

        console.log(`${this.apiUrl}/position`)
        return this.http.get(`${this.apiUrl}/position`, this.headers);
    }

    // Update
    // updateTask(id: any, data: any): Observable<any> {
    //     const API_URL = `${this.apiUrl}/update-task/${id}`;
    //     return this.http
    //         .put(API_URL, data, { headers: this.headers })
    //         .pipe(catchError(this.error));
    // }


    // Delete
    // deleteTask(id: any): Observable<any> {
    //     // tslint:disable-next-line:prefer-const
    //     var API_URL = `${this.apiUrl}/delete-task/${id}`;
    //     return this.http.delete(API_URL).pipe(catchError(this.error));
    // }


    // Handle Errors
    error(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}
