import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() {}
  AdminMenu: IMenuItem[] = [
    {
      name: "HOME",
      type: "icon",
      tooltip: "Home",
      icon: "home",
      state: "home"
    },
    {
      name: "PROFILE",
      type: "icon",
      tooltip: "Profile",
      icon: "person",
      state: "profile/overview"
    },
    {
      name: "TOUR",
      type: "icon",
      tooltip: "Tour",
      icon: "flight_takeoff",
      state: "tour"
    },
    {
      type: "separator",
      name: "Main Items"
    },
    {
      name: "DASHBOARD",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard",
      sub: [
        { name: "Default", state: "default" },
        { name: "Analytics", state: "analytics" },
        { name: "Cryptocurrency", state: "crypto" },
        { name: "Dark Cards", state: "dark" }
      ]
    } ,
     {
      name: "Company Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "company",
      sub: [
        { name: "Company Creation", state: "/" },

        { name: "Client Creation", state: "/Client" },
        { name: "Vendor Creation", state: "/Vendor" },

        { name: "User Management", state: "/user" },
        { name: "Department", state: "/department" },
        { name: "Vertical", state: "/vertical" },
 
      ]
    }, {
      name: "Material Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "material",
      sub: [
        { name: "Material", state: "/" },
        { name: "Vendor Mapping", state: "/Vendor" },
  
      ]
    }, {
      name: "WareHouse",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
    state: "warehouse",
      sub: [
        { name: "WareHouse", state: "" },
        { name: "WareHouse Material", state: "/material" },
        { name: "WareHouse ManageBy", state: "/manageBy" },

  
      ]
    }, {
      name: "Purchase Order",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "chalan",
      sub: [
        { name: "Purchase Order Creation", state: "/po" },
        { name: "Material In", state: "/in" },
        { name: "Material Out", state: "/out" },

        { name: "Purchase Order Approval", state: "/Approval" },

      ]
    },{
      name: "Work Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "workorder",
      sub: [
        { name: "Payment Term", state: "/payment" },
        { name: "Site Material", state: "/sitematerial" },

        { name: "Work Order", state: "/" },
        
 
  
      ]
    }
  ];
 
  SiteMenu: IMenuItem[] = [
    {
      name: "HOME",
      type: "icon",
      tooltip: "Home",
      icon: "home",
      state: "home"
    },
    {
      name: "PROFILE",
      type: "icon",
      tooltip: "Profile",
      icon: "person",
      state: "profile/overview"
    },
    {
      name: "TOUR",
      type: "icon",
      tooltip: "Tour",
      icon: "flight_takeoff",
      state: "tour"
    },
    {
      type: "separator",
      name: "Main Items"
    },
    {
      name: "DASHBOARD",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard",
      sub: [
        { name: "Default", state: "default" },
        { name: "Analytics", state: "analytics" },
        { name: "Cryptocurrency", state: "crypto" },
        { name: "Dark Cards", state: "dark" }
      ]
    } ,
     {
      name: "Company Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "company",
      sub: [
 
        { name: "Client Creation", state: "/Client" },
        { name: "Vendor Creation", state: "/Vendor" },

        { name: "User Management", state: "/user" },
        { name: "Department", state: "/department" },
        { name: "Vertical", state: "/vertical" },
 
      ]
    }, {
      name: "Material Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "material",
      sub: [
        { name: "Material", state: "/" },
        { name: "Vendor Mapping", state: "/Vendor" },
  
      ]
    }, {
      name: "WareHouse",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
    state: "warehouse",
      sub: [
        { name: "WareHouse", state: "" },
        { name: "WareHouse Material", state: "/material" },
        { name: "WareHouse ManageBy", state: "/manageBy" },

  
      ]
    }, {
      name: "Purchase Order",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "chalan",
      sub: [
        { name: "Purchase Order Creation", state: "/po" },
        { name: "Material In", state: "/in" },
        { name: "Material Out", state: "/out" },
        { name: "Material Approval", state: "/Approval" },

      ]
    },{
      name: "Work Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "workorder",
      sub: [
        { name: "Payment Term", state: "/payment" },
        { name: "Site Material", state: "/sitematerial" },

        { name: "Work Order", state: "/" },
        
 
  
      ]
    }
  ];
  SCMMenu: IMenuItem[] = [
    {
      name: "HOME",
      type: "icon",
      tooltip: "Home",
      icon: "home",
      state: "home"
    },
    {
      name: "PROFILE",
      type: "icon",
      tooltip: "Profile",
      icon: "person",
      state: "profile/overview"
    },
    {
      name: "TOUR",
      type: "icon",
      tooltip: "Tour",
      icon: "flight_takeoff",
      state: "tour"
    },
    {
      type: "separator",
      name: "Main Items"
    },
    {
      name: "DASHBOARD",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard",
      sub: [
        { name: "Default", state: "default" },
        { name: "Analytics", state: "analytics" },
        { name: "Cryptocurrency", state: "crypto" },
        { name: "Dark Cards", state: "dark" }
      ]
    } ,
     {
      name: "Company Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "company",
      sub: [
 
         { name: "Vendor Creation", state: "/Vendor" }   
      ]
    }, {
      name: "Material Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "material",
      sub: [
        { name: "Material", state: "/" },
        { name: "Vendor Mapping", state: "/Vendor" },
  
      ]
    }, {
      name: "WareHouse",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
    state: "warehouse",
      sub: [
        { name: "WareHouse", state: "" },
        { name: "WareHouse Material", state: "/material" },
        { name: "WareHouse ManageBy", state: "/manageBy" },

  
      ]
    }, {
      name: "Purchase Order",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "chalan",
      sub: [
        { name: "Purchase Order Creation", state: "/po" },
        { name: "Material In", state: "/in" },
         { name: "Clalan Approval", state: "/Approval" },

      ]
    } 
  ];
  SalesMenu: IMenuItem[] = [
    {
      name: "HOME",
      type: "icon",
      tooltip: "Home",
      icon: "home",
      state: "home"
    },
    {
      name: "PROFILE",
      type: "icon",
      tooltip: "Profile",
      icon: "person",
      state: "profile/overview"
    },
    {
      name: "TOUR",
      type: "icon",
      tooltip: "Tour",
      icon: "flight_takeoff",
      state: "tour"
    },
    {
      type: "separator",
      name: "Main Items"
    },
    {
      name: "DASHBOARD",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard",
      sub: [
        { name: "Default", state: "default" },
        { name: "Analytics", state: "analytics" },
        { name: "Cryptocurrency", state: "crypto" },
        { name: "Dark Cards", state: "dark" }
      ]
    } ,
     {
      name: "Company Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "company",
      sub: [
 
        { name: "Client Creation", state: "/Client" },
 
  
      ]
    },   {
      name: "Work Management",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "workorder",
      sub: [
        { name: "Payment Term", state: "/payment" },
        { name: "Site Material", state: "/sitematerial" },

        { name: "Work Order", state: "/" },
        
 
  
      ]
    }
  ];
  ProjectMenu: IMenuItem[] = [
    {
      name: "HOME",
      type: "icon",
      tooltip: "Home",
      icon: "home",
      state: "home"
    },
    {
      name: "PROFILE",
      type: "icon",
      tooltip: "Profile",
      icon: "person",
      state: "profile/overview"
    },
    {
      name: "TOUR",
      type: "icon",
      tooltip: "Tour",
      icon: "flight_takeoff",
      state: "tour"
    },
    {
      type: "separator",
      name: "Main Items"
    },
    {
      name: "DASHBOARD",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard",
      sub: [
        { name: "Default", state: "default" },
        { name: "Analytics", state: "analytics" },
        { name: "Cryptocurrency", state: "crypto" },
        { name: "Dark Cards", state: "dark" }
      ]
    }, {
      name: "Purchase Order",
      type: "dropDown",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "",
      sub: [
        // { name: "Clalan Out", state: "/out" },
        { name: "WorkOrder", state: "workorder/pm" },

      ]
    }  
  ];
  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Frequently Accessed";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.AdminMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
      switch (menuType) {
        case "admin-menu":
          this.menuItems.next(this.AdminMenu);
          break;
      case "site-menu":
        this.menuItems.next(this.SiteMenu);
        break;    
        case "project-menu":
          this.menuItems.next(this.ProjectMenu);
          break;
          case "sales-menu":
            this.menuItems.next(this.SalesMenu);
            break;
          case "scm-menu":
            this.menuItems.next(this.SCMMenu);
            break;
          case "management-menu":
            this.menuItems.next(this.AdminMenu);
            break;
      default:
        this.menuItems.next(this.SiteMenu);
    }
  }
}
