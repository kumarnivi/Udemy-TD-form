import { Component } from '@angular/core';
import { NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy_form_TD';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // ** happend in submit **
  onSubmit(form:NgForm) {
    console.log(form)
  }
}

