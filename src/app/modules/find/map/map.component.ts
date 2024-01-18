import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/google-maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit{
  @ViewChild('map') containerForGoogle!: ElementRef;
  googleMaps:any;
  // google: any;
  longitude:number=0;
  latitude:number=0;

  constructor(
    private google: GoogleMapsService){
  }
  ngOnInit(): void {
    var location = new Geolocation()
    location.getCurrentPosition((p)=>{
      this.longitude = p.coords.longitude;
      this.latitude = p.coords.latitude;
    });
  }

  ngAfterViewInit(): void {
    this.google.addGoogleMapScript().then(async (googleMaps: any)=>{
      debugger;
      this.googleMaps = googleMaps;
      const mapEl = this.containerForGoogle.nativeElement;
      this.containerForGoogle = new this.googleMaps.Map(mapEl, {
        disableDefaultUI: true,
        mapTypeControl: false,
        center: { lat: this.latitude, lng: this.longitude },
        fullscreenControl: false,
        zoom: 15,
        draggable: true,
        scaleControl: true,
        scrollwheel: false,
        navigationControl: false,
        streetViewControl: false,
      });
    })
  }
}
