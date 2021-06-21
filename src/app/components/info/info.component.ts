import { IpService } from './../../services/ip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  public info: any;
  public temp:any;
  public title = 'Radiodeleyenda';
  constructor(private http: IpService) {}

  ngOnInit(): void {
    this.http.loadIp().subscribe((value: any) => {
      this.info = value;
      console.log(value);
    });
    setTimeout(()=>{this.http.loadTemp(this.info?.city).subscribe((value: any) => {console.log(value)
    this.temp=value;})},1000)
  }
}
