import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linksData = [
    {
      title: 'TechZone',
      links: [
        {
          name: 'About Us',
          path: '/about-us'
        },
        {
          name: 'Careers',
          path: '/'
        },
        {
          name: 'News',
          path: '/'
        },
        {
          name: 'Terms and Conditions',
          path: '/'
        }
      ]
    },
    {
      title: 'Contacts',
      links: [
        {
          name: 'Contacts',
          path: '/'
        },
        {
          name: 'Stores',
          path: '/'
        },
        {
          name: 'Repair shops',
          path: '/'
        },
        {
          name: `Holiday's working time`,
          path: '/'
        }
      ]
    },
    {
      title: 'Clients',
      links: [
        {
          name: 'Advices',
          path: '/'
        },
        {
          name: 'Transport',
          path: '/'
        },
        {
          name: 'Delivery for online purchases',
          path: '/'
        },
        {
          name: 'Doorstep delivery when purchased from physical stores',
          path: '/'
        },
        {
          name: 'Pick from store',
          path: '/'
        },
        {
          name: 'Services',
          path: '/'
        },
        {
          name: 'Order return',
          path: '/'
        }
      ]
    },
    {
      title: 'Information',
      links: [
        {
          name: 'How to order',
          path: '/'
        },
        {
          name: 'Sanitary and hygienic conditions',
          path: '/'
        },
        {
          name: 'Recycling',
          path: '/'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
