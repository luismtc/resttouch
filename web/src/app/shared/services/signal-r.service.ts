import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private urlSignalR: string = 'https://localhost:44367/printHub';
  private hubConnection: signalR.HubConnection;

  constructor() { }

  startConnection = (grpName: string = null) => {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl(this.urlSignalR).build();
    this.hubConnection.start().then(() => {
      console.log(`Conexión iniciada con ${this.urlSignalR}...`);
      if (grpName) {
        this.connectToGroup(grpName);
      }
    }).catch((err) => console.log(`ERROR: ${err}`));
  }

  connectToGroup = (grpName: string) => this.hubConnection.invoke('AddToGroup', grpName).then(() => console.log(`Conectado al grupo ${grpName}.`)).catch((err) => console.log(`ERROR: ${err}.`));

  //addTransferDataListener = () => this.hubConnection.on('ReceiveMessage', (data) => console.log(data));

  broadcastData = (grpName: string, data: any) => this.hubConnection.invoke('SendMessage', grpName, data).catch((err) => console.log(`ERROR: ${err}.`));

  //addBroadcastDataListener = () => this.hubConnection.on('SendMessage', (data) => console.log(data));
}
