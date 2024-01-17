import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
  
export class HeaderComponent implements OnInit {
  searchPlaceHolder: string = "";
  iconDescStatus: boolean = true;
  @ViewChild('searchBar') searchBarElement: ElementRef;
  ngOnInit(): void {
    if (window.innerWidth > 800) {
      this.searchPlaceHolder = 'Search for a restaurant, cuisine or area...'
      this.iconDescStatus = true
    } else {
      this.searchPlaceHolder = 'Search Here...'
      this.iconDescStatus = false
    }
  }

  @HostListener('window:resize', ['$event']) onResize() {
    if (this.searchBarElement.nativeElement.offsetWidth > 315) {
      this.searchPlaceHolder = 'Search for a restaurant, cuisine or area...'
      this.iconDescStatus = true
    } else {
      this.searchPlaceHolder = 'Search Here...'
      this.iconDescStatus = false
    }
  }
}
