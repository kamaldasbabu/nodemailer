import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  public message = 'xx';
  addResForm:FormGroup = new FormGroup({
    resname: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  // JSON.stringify(this.addResForm.value)
  onAddRestatrant(){
    alert(this.message);
    if(this.addResForm.valid){
      this.mailService.onAdd(this.addResForm.value)
      .subscribe(data =>{
        console.log(data);
      })
      
    }else{
      console.log('invalid form');
      return 
    }
    console.log(JSON.stringify(this.addResForm.value));
    this.addResForm.reset();
      
  }
  
  constructor(private mailService: MailService) { }
  ngOnInit(): void {
  }

}
