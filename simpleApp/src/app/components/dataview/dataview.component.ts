import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {
  ticket_Id ;
  data1 = {};
  constructor(private route:ActivatedRoute, private userservice:UsersService) { }

  ngOnInit() {
    this.ticket_Id = this.route.snapshot.paramMap.get('id');
    this.userservice.viewDatas(this.ticket_Id).subscribe(datas=>
      this.data1= datas);
  }

}
