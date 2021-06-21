import { Info } from './../interfaces/ip.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class IpService implements OnInit {
private info :any;
constructor(private _http:HttpClient) { }
ngOnInit(){
   
}

loadIp():Observable<Info> {
  return this._http.get('https://jsonip.com')
    .pipe(
      switchMap((value: any) => {
        
        let url = `http://api.ipstack.com/${value.ip}?access_key=d74a6ceecfc9893d27e9319eb2183e04`;
        return this._http.get<Info>(url);
      })
      
    );
  }

  loadTemp(city:string){

    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11f1f36cb33ec1d1289c8e3d869cbb27&lang=es&units=metric`)
  }


 
}


