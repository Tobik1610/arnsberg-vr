import { Component, OnInit } from '@angular/core';
import { Sight } from '../sight';
import { SightService } from '../sight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sights: Sight[];

  constructor(private sightService: SightService) { }

  ngOnInit() {
    this.getSights();
  }

  getSights(){
    this.sightService.getSights().subscribe(sights => this.sights = sights);
  }

}
