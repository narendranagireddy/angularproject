import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Client } from '../models/Client';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
// tslint:disable-next-line:semicolon
}


@Injectable()
export class ClientService {
  clientCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;
  data: Observable<any>;
  serviceurl = 'https://hsbitla.hotelsimply.com/api/avaliable_room_types.json?from_date=27/03/2018&to_date=28/03/2018&property_id=796&accomodation_type=1&lead_id=&material_id=&be_lead_id=&no_of_adults=1';
  constructor(private http: HttpClient) { }

  //  ngOnInit(): void {
  //   this.http.get('serviceurl').subscribe(data => {
  //     console.log(data);
  //   });
  // }
  getClients(client: Client): Observable<Client> {
    return this.http.post<Client>(this.serviceurl, client, httpOptions);
  }
  saveClient (client: Client): Observable<Client> {
    return this.http.post<Client>(this.serviceurl, client, httpOptions);
  }

}
