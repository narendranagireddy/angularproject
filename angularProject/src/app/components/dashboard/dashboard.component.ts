import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { HttpModule, Http } from '@angular/http';

import { Client } from '../../models/Client';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
clients: Client[];
client: Client;
  constructor(private clientService: ClientService) { }
 data: any;
  ngOnInit() {
    this.clientService.getClients(this.client).subscribe (clients => {
      this.client = clients;
   });
  }
  onNewClient(client: Client) {
    this.clients.unshift(client);
  }
}
