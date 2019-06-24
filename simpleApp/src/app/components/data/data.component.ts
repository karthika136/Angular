import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  datas:any = {};
  constructor(private userservice:UsersService) { }

  ngOnInit() {
    this.userservice.displayDatas().subscribe(data =>
      this.datas = data );
  }

}
