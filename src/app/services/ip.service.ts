import { Info } from './../interfaces/ip.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IpService implements OnInit {
private info :any;
constructor(private _http:HttpClient) { }
private token = environment.token_weather;
private ipStack_tokem= environment.ipStack_token;
ngOnInit(){
   
}

loadIp():Observable<Info> {
  return this._http.get('https://jsonip.com')
    .pipe(
      switchMap((value: any) => {
        
        let url = `http://api.ipstack.com/${value.ip}?access_key=${this.ipStack_tokem}`;
        return this._http.get<Info>(url);
      })
      
    );
  }

  loadTemp(city:string){

    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.token}&lang=es&units=metric`)
  }


 
}


