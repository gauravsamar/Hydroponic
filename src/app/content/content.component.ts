import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs/internal/Observable';
import * as uuid from 'uuid';
import { ResponseModel } from '../models/responseModel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  start_date = moment("2022-04-21T12:00");
  data:Array<ResponseModel> = [];
  

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    
    console.log(this.start_date.format("DD-MM-yyyy, hh:mm"));
    this.APICall();
  }

  async postData()
  {
    
    for(let i=0;i<144;i++)
    {
      let val1 = (Math.random()*40 + 160).toFixed(2);
      let val2 = (Math.random()*30 + 75).toFixed(2);
      let body = {
      id:uuid.v4(),
      sensor1:val1.toString(),
      sensor2:val2.toString(),
      time:this.start_date
      }
      this.postDataAPICall(body).subscribe(res=>{
        console.log('Inserted');
      })
      this.start_date.add(1,'hour');
      await this.sleep(1000);
      console.log('Wake up');
    }
  }
  sleep(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  APICall()
  {
    this.getDataAPICall().subscribe(res=>{
      console.log(res);
      this.data = res['meta'];
      console.log(this.data)
    })
  }
  getDataAPICall(): Observable<any> {
    return this.http.get<any>(`https://nwnbzkrrqi.execute-api.ap-south-1.amazonaws.com/test/get-Hydroponic-select`);
  }

  postDataAPICall(body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "token007"
      })
    };
    return this.http.post<any>(`https://nwnbzkrrqi.execute-api.ap-south-1.amazonaws.com/test/post-Hydroponic-data`, body, httpOptions);
  }

  status(val1:any)
  {
    let moisture = "";
    let light = "";
    if(val1<150)
    moisture = 'WET';
    else if(val1>190)
    moisture = 'DRY';
    else
    moisture = 'IDEAL';
    return moisture;
  }
  format(str:any)
  {
    return moment(str).format("DD-MM-yyyy, hh:mm");
  }
}

