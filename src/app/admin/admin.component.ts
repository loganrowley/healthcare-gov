import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';
import { Subscription } from '../subscription.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SubscribeService]
})
export class AdminComponent implements OnInit {
  subscriptions: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private subscribeService: SubscribeService) { }

  ngOnInit() {
    this.subscriptions = this.subscribeService.getSubscriptions();
  }

}
