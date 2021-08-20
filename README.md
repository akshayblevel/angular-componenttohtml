# angular-componenttohtml

employee-component.component.ts

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  employee = {
    id: 1,
    name: 'Akshay Patel'
  };
}
```
employee-component.component.html

```html
<h2>Employee Details</h2>
<div>
  <div>
    {{employee.id}}
    <hr />
    {{employee.name}}
  </div>
</div>
```

app.module.ts

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EmployeeComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

app.component.html

```html
<app-employee-component></app-employee-component>
```
