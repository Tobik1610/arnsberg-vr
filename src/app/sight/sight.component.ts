import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Sight } from '../sight';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SightService }  from '../sight.service';

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.css']
})
export class SightComponent implements OnInit {

  playing: boolean = false;

  @Input() sight: Sight;
  @Input() btnImage: string = "Play";

  @ViewChild('video') video: ElementRef;

  constructor(
  private route: ActivatedRoute,
  private sightService: SightService,
  private location: Location
  ) {}

  ngOnInit(): void {
    this.getSight();
  }

  getSight(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sightService.getSight(id)
      .subscribe(sight => this.sight = sight);
  }

  onVideoClick(event: any){
    if(this.playing){
      this.video.nativeElement.pause();
      this.btnImage = "Play";
    }else{
      this.video.nativeElement.play();
      this.btnImage = "Pause";
    }

    this.playing = !this.playing;
  }

}
