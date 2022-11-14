import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
  From : Uint16Array;
  To: Uint16Array;
  Amount: Uint16Array;
  error: any = null;

  constructor(private userService : UserService,
    private route: ActivatedRoute,) { }

    ngOnInit(): void {
      this.userService
        .errorMessage
        .subscribe(errorMessage => {
          this.error = errorMessage;
        });
    }

  onTransaction(): void {
      this.userService.transaction(this.From, this.To, this.Amount);
  }

  onKey(event: any, type: string) {
    if (type === 'from') {
        this.From = event.target.value;
    } else if (type === 'to') {
        this.To = event.target.value;
    }else if (type === 'amount') {
      this.Amount = event.target.value;
  }
  }

}
