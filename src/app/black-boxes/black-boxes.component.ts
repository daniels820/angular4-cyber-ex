import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'black-boxes',
  templateUrl: './black-boxes.component.html',
  styleUrls: ['./black-boxes.component.scss'],

})
export class BlackBoxesComponent implements OnInit {
  public title = "1. Select Blackboxes";
  public groupIsOpen: boolean = false;
  public device_groups;
  private toggleState;

  @Input()
  set deviceGroups(device_groups) {
    this.device_groups = device_groups;
  }
  @Output()
  devicesCheckedEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit() {
    this.sendDevice();
  }
  checkDevice(groupId, deviceId, deviceIndex, groupIndex) {
    // mark active or not in device_groups array
    let devices = this.device_groups[groupIndex]['devices'];
    this.device_groups[groupIndex].devices.forEach(device => {
      if (device.id == deviceId) {
        this.device_groups[groupIndex].devices[deviceIndex].active = (this.device_groups[groupIndex].devices[deviceIndex].active == 1 ? 0 : 1);
      };
    });
    this.sendDevice();
  }

  sendDevice() {
    //send only the active devices to summary component
    let checkedDevices = [];
    for (let group in this.device_groups) {
      this.device_groups[group].devices.map((item, index) => {
        if (item.active == '1') {
          checkedDevices.push(item);
        }
      })
    }
    this.devicesCheckedEmitter.emit(checkedDevices);
  }
  checkGroup(groupIndex) {
    // alert(groupIndex);
    if (this.device_groups[groupIndex].checked && this.device_groups[groupIndex].checked == '1') {
      this.device_groups[groupIndex].checked = '0';
    } else {
      this.device_groups[groupIndex].checked = '1';
    }
    this.device_groups[groupIndex].devices.forEach(groupDevice => {
      if (this.device_groups[groupIndex].checked == '1') {
        groupDevice.active = '1';
      } else if (this.device_groups[groupIndex].checked == '0') {
        groupDevice.active = '0';
      }
    });
    this.sendDevice();
  }

  toggleExpand(groupIndex) {
    if (!this.device_groups[groupIndex].active) {
      this.device_groups[groupIndex].active = true;
    } else {
      this.device_groups[groupIndex].active = !this.device_groups[groupIndex].active;
    }
  }
}
