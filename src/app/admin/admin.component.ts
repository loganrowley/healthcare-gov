import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';
import { Subscription } from '../subscription.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SubscribeService]
})
export class AdminComponent implements OnInit {

  constructor(private subscribeService: SubscribeService) { }

  ngOnInit() {
  }

}
