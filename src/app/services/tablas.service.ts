import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class TablasService {
  api_url: string = "http://racootest.com/tt/tablasRacoo/public";

  headers: any = {
    //"Content-Type": "application/x-www-form-urlencoded",
    "APP-TOKEN": ""
  };

  constructor(private http: HttpClient) {
    console.log("Tablas Service Listo");
  }

  createHeader() {
    this.headers["APP-TOKEN"] = localStorage.getItem("currentUser");
  }

  getAllRequest() {
    this.createHeader();
    return this.http.get(`${this.api_url}/solicitud/list`, {
      headers: this.headers
    });
  }

  getRequestForStatus(status: string) {
    this.createHeader();
    return this.http.get(`${this.api_url}/solicitud/listPorStatus/${status}`, {
      headers: this.headers
    });
  }

  postNewRequest(req: any) {
    this.createHeader();
    return this.http.post(`${this.api_url}/solicitud/add`, req, {
      headers: this.headers
    });
  }

  postNewLink(req: any) {
    this.createHeader();
    return this.http.post(`${this.api_url}/enlaces/add`, req, {
      headers: this.headers
    });
  }

  getIdRequest(id: any) {
    this.createHeader();
    return this.http.get(`${this.api_url}/solicitud/${id}`, {
      headers: this.headers
    });
  }

  postRevision(id: any) {
    this.createHeader();
    return this.http.post(`${this.api_url}/solicitud/revisar`, id, {
      headers: this.headers
    });
  }

  getAllLinks() {
    this.createHeader();
    return this.http.get(`${this.api_url}/enlaces/list`, {
      headers: this.headers
    });
  }

  getLinksId(id: string) {
    this.createHeader();
    return this.http.get(`${this.api_url}/solicitud/enlaces/${id}`, {
      headers: this.headers
    });
  }

  postNegation(req: any) {
    this.createHeader();
    return this.http.post(`${this.api_url}/solicitud/denegar`, req, {
      headers: this.headers
    });
  }

  getAllNegations(id: number) {
    this.createHeader();
    return this.http.get(`${this.api_url}/solicitud/negaciones/${id}`, {
      headers: this.headers
    });
  }
}
