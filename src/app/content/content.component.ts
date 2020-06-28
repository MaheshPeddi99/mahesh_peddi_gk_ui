import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  label: string;
  path: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  public tiles: Tile[] = [
    {
      label: 'Hierarchy',
      path: 'hierarchy'
    },
    {
      label: 'Customer',
      path: 'customer'
    },
    {
      label: 'Orders',
      path: 'orders'
    },
    {
      label: 'Schedules',
      path: 'customer'
    },
    {
      label: 'Messages',
      path: 'customer'
    },
    {
      label: 'Emails',
      path: 'customer'
    },
  ]

  constructor(private route: Router) { }

  public ngOnInit(): void { }

  public tileSelected(path: string): void {
    this.route.navigate([`/${path}`]);
  }
}
