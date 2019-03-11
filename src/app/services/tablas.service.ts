import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class TablasService {
  user_token: string =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Njc2MDgwMDksImF1ZCI6IjgzZDNiZDMxMzM2MDlhNGE5ZTMxM2VhYTI2NzExMjM4YzM3ZWU1YjQiLCJkYXRhIjp7InVzdWFyaW9faWQiOiI3IiwidXN1YXJpbyI6ImFkbWluIiwiY2xhdmUiOiIqNEFDRkUzMjAyQTVGRjVDRjQ2Nzg5OEZDNThBQUIxRDYxNTAyOTQ0MSIsImVtYWlsIjpudWxsfX0.Ty_t8zxT9dv4wgDYWwjAYCPI0O0JTq3E_0rertR60aE";
  api_url: string = "http://racootest.com/tt/tablasRacoo/public";

  headers: any = {
    //"Content-Type": "application/x-www-form-urlencoded",
    "APP-TOKEN": localStorage.getItem("currentUser")
  };

  constructor(private http: HttpClient) {
    console.log("Tablas Service Listo");
  }

  getAllRequest() {
    return this.http.get(`${this.api_url}/solicitud/list`, {
      headers: this.headers
    });
  }

  postNewRequest(req: any) {
    return this.http.post(`${this.api_url}/solicitud/add`, req, {
      headers: this.headers
    });
  }

  postNewLink(req: any) {}
}
