import { Injectable } from "@angular/core";
import {
  HttpClientModule,
  HttpClientJsonpModule,
  HttpClient
} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LoadFeedsService {
  readonly flickrFeedsUrl = `https://www.flickr.com/services/feeds/photos_public.gne?format=json`;

  // use HttpClient
  constructor(private  http: HttpClient) {}

  // load json from api url with optional search tags
  // this returns observable which has to be subscribed later to get the result
  loadFeed(text: string): Observable <Object> {
    let url: string;

    if(text)
      url = this.flickrFeedsUrl + "&tags=" + text;
    else
      url = this.flickrFeedsUrl;

      return this.http.jsonp(url, "jsoncallback");
  }
}
