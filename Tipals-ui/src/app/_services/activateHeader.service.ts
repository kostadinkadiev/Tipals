import { Injectable } from '@angular/core';

@Injectable()
export class activateHeader {
    
    constructor() { }

    setLink(id){
        var all = document.getElementsByClassName("activeLink");
        for (var i = 0; i < all.length; i++)
            all[i].classList.remove("activeLink");

        var d = document.getElementById(id);
        d.classList.add("activeLink");
    }

}