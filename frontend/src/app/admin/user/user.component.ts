import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    department: ['', Validators.required],
    role: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
public submit(){
  console.log(this.profileForm.value);
  
}
}
