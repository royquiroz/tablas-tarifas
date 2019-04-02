import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //api_url: string = "http://racootest.com/tt/loginRacoo/public";
  api_url: string = "http://insolit-sd.com/racooTablas/loginRacoo/public";

  constructor(private http: HttpClient) {
    console.log("Auth Service Listo");
  }

  login(Usuario: any): Observable<boolean> {
    let body = Usuario;

    return this.http.post(`${this.api_url}/token/new`, body).pipe(
      map((data: any) => {
        console.log(data);

        if (data.result === null) {
          return false;
        }
        localStorage.setItem("currentUser", data.result);
        return true;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  private saveToken(token: any) {
    if (token !== null) {
      localStorage.setItem("currentUser", token);
      return true;
    }
    return false;
  }

  getCheckToken() {
    return this.http
      .post(`${this.api_url}/token/check`, {
        token: localStorage.getItem("currentUser")
      })
      .pipe(
        map((data: any) => {
          return data.result[0];
        })
      );
  }

  logout(): void {
    localStorage.removeItem("currentUser");
  }
}
