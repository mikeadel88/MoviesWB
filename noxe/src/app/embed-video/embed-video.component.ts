import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.css']
})
export class EmbedVideoComponent implements OnInit {
  @Input() key:string|null=null
  @Input() site:string="Youtube"
  url:string=""
  constructor( private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }
  getSafeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
