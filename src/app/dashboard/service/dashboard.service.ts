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
export class DashboardService {

    // public apiUrl = 'http://localhost:3000';
    public apiUrl = 'http://app-sewing.pp.ua:3000';
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
    getTasks() {

        console.log(`${this.apiUrl}/tasks`)
        return this.http.get(`${this.apiUrl}/tasks`, this.headers);
    }

    getNotifications() {

        console.log(`${this.apiUrl}/notifications`)
        return this.http.get(`${this.apiUrl}/notifications`, this.headers);
    }

    delNotifications(item: any) {

        console.log(`${this.apiUrl}/notifications`)
        return this.http.delete(`${this.apiUrl}/notifications/${item}`, this.headers);
    }

    // Update
    postTask(data: any): Observable<any> {
        return this.http
            .post(`${this.apiUrl}/tasks`, data, this.headers)
            .pipe(catchError(this.error));
    }

    // Update
    delTask(data: any): Observable<any> {
        return this.http
            .delete(`${this.apiUrl}/tasks/${data.id}`, data)
            .pipe(catchError(this.error));
    }

    // Update
    putTask(data: any): Observable<any> {

        console.log(data)
        return this.http
            .put(`${this.apiUrl}/tasks`, data, this.headers)
            .pipe(catchError(this.error));
    }


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
