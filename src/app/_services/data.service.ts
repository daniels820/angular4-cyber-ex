import { Injectable } from '@angular/core';
import * as exData from '../../assets/ex_data';
import { Subject } from 'rxjs/Subject';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { element } from 'protractor';


@Injectable()
export class DataService {
  private device_groups;
  private protocols;
  private times;
  public data;
  public apiRoot: string = "http://localhost:4200/index.html";

  constructor(private _http: Http) {
    this.data = exData.DATA;
    this.device_groups = exData.DATA.device_groups;
    this.protocols = exData.DATA.protocols;
    this.times = exData.DATA.times;
  }

  getDeviceGroups() {
    return this.device_groups;
  }
  getProtocols() {
    return this.protocols;
  }
  getTimes() {
    return this.times;
  }
  getAllData() {
    return this.data;
  }
  startLearning(dl, pl, tl) {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    let requestOptions = new RequestOptions();
    requestOptions.search = this.prepareParams(dl, pl, tl);
    this._http.get(url, requestOptions)
      .toPromise()
      .then(response => response.json())

  }

  prepareParams(dl, pl, tl): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();
    let devicesIdstring: string = "";
    let protocolsIdstring: string = "";
    let timeIdstring: string = "";

    if (dl.length > 1) {
      dl.forEach(element => {
        devicesIdstring += element.id + ','
      });
    } else {
      devicesIdstring += dl[0].id;
    }
    if (pl.length > 1) {
      pl.forEach(element => {
        protocolsIdstring += element.id + ','
      });
    } else {
      protocolsIdstring += pl[0].id;
    }
    params.set('devices', devicesIdstring);
    params.set('protocols', protocolsIdstring);
    params.set('times', tl.id);
    return params;
  }

}

