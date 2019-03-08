import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class TablasService {
  api_url: string = "http://racootest.com/tt/tablasRacoo/public/";
  headers: any = {
    "Content-Type": "application/x-www-form-urlencoded",
    "APP-TOKEN":
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjczNTI0NTMsImF1ZCI6IjgzOTE4MTRmY2MxMDE0MmMzNGYxMTM4MzM4ODNiMzI1MTdhMjExNzgiLCJkYXRhIjp7InVzdWFyaW9faWQiOiI3IiwidXN1YXJpbyI6ImFkbWluIiwiY2xhdmUiOiIqNEFDRkUzMjAyQTVGRjVDRjQ2Nzg5OEZDNThBQUIxRDYxNTAyOTQ0MSIsImVtYWlsIjpudWxsfX0.yagmNSIVhrsOuv9DIDweFSqwrdk58oHqwpa53ij5DMw"
  };

  constructor(private http: HttpClient) {
    console.log("Tablas Service Listo");
  }

  getAllRequest() {
    return this.http.get(`${this.api_url}solicitud/list`, {
      headers: this.headers
    });
  }

  newRequest() {}
}
