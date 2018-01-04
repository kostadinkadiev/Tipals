import { Component } from '@angular/core';
import { User } from '../_models/index'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentUser: User;
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

/*    dropDownClick(){
     var x = document.getElementById("dropdown");
     if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  } 
   }*/

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
