import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userAuth: UserAuthService, private toaster: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.userAuth.Register(f.value).subscribe((data: Response) => {
      console.log(data);
      this.toaster.success('Registred', 'Success');
    });
  }

}
