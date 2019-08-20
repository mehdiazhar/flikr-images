import { Component } from "@angular/core";
import {
  HttpClientModule,
  HttpClientJsonpModule,
  HttpClient
} from "@angular/common/http";
import {LoadFeedsService} from './load-feeds.service';


// class to hold flickr feed object
class Feed {
  title: string;
  link: string;
  description: string;
  modified: string;
  generator: string;
  items : FeedItem[];
}

// class for each feed item in a flickr feed
class FeedItem {
  title: string;
  link: string;
  media: string;
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items: FeedItem[];
  text: string;
  
  // load feeds on page load
  constructor(private loadFeedsService: LoadFeedsService) {
    this.loadFeeds('');
  }

  // subscribe to service to load data and save it in `items` array
  // this will be used to display image on frontend
  loadFeeds(text:string) {
    const data= this.loadFeedsService.loadFeed(text)
    //.toPromise().then((res: Feed) => {this.items = res.items;});
    .subscribe((res: Feed) => { this.items = res.items; });
  }
}
