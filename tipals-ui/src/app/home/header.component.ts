import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectLink(selectedLink) {

    var all = document.getElementsByClassName("activeLink");
    for (var i = 0; i < all.length; i++)
      all[i].classList.remove("activeLink");

    var d = document.getElementById(selectedLink.id);
    d.classList.add("activeLink");
  }

  openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

}
