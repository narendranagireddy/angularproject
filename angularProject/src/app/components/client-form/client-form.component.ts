import { Component, OnInit, EventEmitter,  Output } from '@angular/core';
import { ClientService } from '../../services/client.service';

import { Client } from '../../models/Client';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
 client: Client;
 @Output() newClient: EventEmitter<Client> = new EventEmitter();
  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }
  addUser(name, email) {
    if (!name || !email) {
      alert( 'Please enter the name and emailid');
    } else {
      this.clientService.saveClient ({name, email} as Client).subscribe( client => {
        this.newClient.emit(client);
      });
    }
  }

}
