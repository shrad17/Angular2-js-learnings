import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  string ='yes I can add string this way';
  numberInterpolation = 3;
  onClicked(){
    alert('Button is working');
  }
  person = {
      name: 'shraddha',
      age: 23
  };
}
