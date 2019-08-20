import { Component, OnInit } from '@angular/core';

import {Input, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent{
  @Output()
  search = new EventEmitter();

  // emit search box text as soon as search button is clicked
  onSearch(searchText) {
      this.search.emit(searchText);
  }
}
