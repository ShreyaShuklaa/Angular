import { Component } from '@angular/core';
import { PerService } from '../pservice.service';
@Component({
    selector:'plist',
    templateUrl:'./plist.component.html',
    styleUrls:['./plist.component.css']
    
})

export class PlistComponent{
    perarr=[];
        constructor(private pservice:PerService){}
    ngOnInit(){
        this.perarr=this.pservice.getPersons();
    }
    
}

