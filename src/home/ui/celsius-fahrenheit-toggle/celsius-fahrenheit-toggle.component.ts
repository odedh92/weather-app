import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celsius-fahrenheit-toggle',
  templateUrl: './celsius-fahrenheit-toggle.component.html',
  styleUrls: ['./celsius-fahrenheit-toggle.component.css']
})
export class CelsiusFahrenheitToggleComponent implements OnInit {

  checked = true
  unit = 'C'
  constructor() { }

  ngOnInit(): void {
  }
  changeUnit(){
    this.checked != this.checked
    this.unit == 'C' ? this.unit = 'F' : this.unit = 'C'
  }

}
