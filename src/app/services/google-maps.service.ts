import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor() { }
  async addGoogleMapScript(){
    const win = window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }
    debugger;
    const script = document.createElement('script');
    return new Promise((resolve,rejects)=>{
      script.src=`https://maps.googleapis.com/maps/api/js?key=${environment.googleApiKey}`;
      document.body.appendChild(script);
      script.async = true;
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        } else {
          rejects('Google maps sdk not available ');
        }
      }
    })
  }
}
