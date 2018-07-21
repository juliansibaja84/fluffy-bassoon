import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Dream } from './dream.module';

@Injectable()
export class DreamsService {
  dreamList: AngularFireList<any>;

  constructor(private fireBase: AngularFireDatabase) { }

  getData() {
    this.dreamList = this.fireBase.list('dreams');
    return this.dreamList;
  }

  insertDream(dream: Dream) {

  }
}
