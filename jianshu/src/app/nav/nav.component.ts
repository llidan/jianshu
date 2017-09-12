import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './../app.routing.module';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  path: any;
  id: object;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    // console.log(this.flag);
    // click1(){
    //   this.flag = true;
    // }
  }

}
