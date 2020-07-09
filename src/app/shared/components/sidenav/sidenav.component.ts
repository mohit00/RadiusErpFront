import { Component, OnInit, Input, AfterContentInit  } from '@angular/core';
import { NavigationService } from "../../../shared/services/navigation.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.template.html'
})
export class SidenavComponent implements AfterContentInit {
  @Input('items') public menuItems: any[] = [];
  @Input('hasIconMenu') public hasIconTypeMenuItem: boolean;
  @Input('iconMenuTitle') public iconTypeMenuTitle: string;

  constructor(private NavigationService:NavigationService) {}
  userData:any;
  ngAfterContentInit (){
    setTimeout(res=>{
      this.userData =   JSON.parse(sessionStorage.getItem('user')) 

      if(this.userData.role == 'Admin'){
        this.NavigationService.publishNavigationChange('admin-menu') 
    
      }else  if(this.userData.role == 'SiteAdmin'){
        this.NavigationService.publishNavigationChange('site-menu') 
    
      }else  if(this.userData.role == 'Sales'){
        this.NavigationService.publishNavigationChange('sales-menu') 
    
      }else  if(this.userData.role == 'Project'){
        this.NavigationService.publishNavigationChange('project-menu') 
    
      }else  if(this.userData.role == 'scm'){
        this.NavigationService.publishNavigationChange('scm-menu') 
    
      }else  if(this.userData.role == 'Management'){
        this.NavigationService.publishNavigationChange('management-menu') 
    
      }
  
    },100)
  
  }
  ngOnInit() {
  }

  // Only for demo purpose
  addMenuItem() {
    this.menuItems.push({
      name: 'ITEM',
      type: 'dropDown',
      tooltip: 'Item',
      icon: 'done',
      state: 'material',
      sub: [
        {name: 'SUBITEM', state: 'cards'},
        {name: 'SUBITEM', state: 'buttons'}
      ]
    });
  }
}