import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'app/_services/data.service';
import { debug } from 'util';

@Component({
  selector: 'protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.scss']
})
export class ProtocolsComponent implements OnInit {
  public title = "2. Select Protocols";
  public groupIsOpen: boolean = false;
  public _protocols;

  constructor() {
  }

  ngOnInit() {
    console.log(this._protocols);

  }

  @Input()
  set protocols(protocols) {
    this._protocols = protocols;
  }

  @Output()
  protocolsCheckedEmitter: EventEmitter<any> = new EventEmitter<any>();


  checkProtocol(protocolId, protocolIndex) {
    // mark active or not in _protocols array
    if (!this._protocols[protocolIndex]['active']) {
      this._protocols[protocolIndex]['active'] = '1';
    } else if (this._protocols[protocolIndex]['active'] == '1') {
      this._protocols[protocolIndex]['active'] = '0';
    } else if (this._protocols[protocolIndex]['active'] == '0') {
      this._protocols[protocolIndex]['active'] = '1';
    }


    //send only the active protocols
    let checkedProtocols = [];
    this._protocols.forEach(protocol => {
      if (protocol.active == '1') {
        checkedProtocols.push(protocol);
      }
    })
    console.log(checkedProtocols);
    this.protocolsCheckedEmitter.emit(checkedProtocols);
  }
}
