import { Injectable } from '@angular/core';
import { Subscription } from './subscription.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SubscribeService {
  subscriptions: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.subscriptions = database.list('subscriptions');
  }

  getSubscriptions() {
    return this.subscriptions;
  }

  addSubscription(newSubscription: Subscription) {
    this.subscriptions.push(newSubscription);
  }

  getSubscriptionsById(subscriptionId: string){
    return this.database.object('subscriptions/' + subscriptionId);
  }
}
