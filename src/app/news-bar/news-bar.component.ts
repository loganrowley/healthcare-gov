import { Component, OnInit } from '@angular/core';
import { Subscription } from '../subscription.model';
import { SubscribeService } from '../subscribe.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.css'],
  providers: [SubscribeService]
})
export class NewsBarComponent implements OnInit {
  subscriptions: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private subscribeService: SubscribeService) { }

  ngOnInit() {
    this.subscriptions = this.subscribeService.getSubscriptions();
  }

  submitForm(email: string) {
    var newSubscription: Subscription = new Subscription(email);
    this.subscribeService.addSubscription(newSubscription);
  }
}
