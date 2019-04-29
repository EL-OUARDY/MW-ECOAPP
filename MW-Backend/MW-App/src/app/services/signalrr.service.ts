import { Injectable, OnInit } from '@angular/core';
import { SignalRConnection } from 'ng2-signalr';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalrrService implements OnInit {
  myId;
  cnx: SignalRConnection;
  subscription: Subscription;
  constructor() {
    this.cnx.start().then(() => {
      this.cnx.invoke('getMyId');
    }).catch((err) => alert(err)
    );
  }

  ngOnInit(): void {
    const listner = this.cnx.listenFor('getMyId');
    this.subscription = listner.subscribe((id) => {
      this.myId = id;
    });
  }
}
