import React, { Component } from 'react';
import * as Rx from 'rxjs/Rx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.btn = React.createRef();
  }
  
  componentDidMount() {
    const functions = [
      (x) => {
        console.log(x)
      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log('completed')
      }
    ];
    // Creating from normal objects...
    const numbers = [22, 54, 67, 100, 995];
    const numbers$ = Rx.Observable.from(numbers);
    numbers$.subscribe(...functions);
    // Also works with sets and maps

    // From events
    const btn = this.btn.current;
    const btnStream$ = Rx.Observable.fromEvent(btn, 'click')
    btnStream$.subscribe(...functions);
    // from scratch
    const obser = new Rx.Observable((observer) => {
      console.log('creating ovservable');
      observer.next('something comes first')
      observer.next('something comes second')

      observer.error(new Error('something went wrong'))

      setTimeout(() => {
        observer.next('something... aleluya');
        observer.complete();
      },3000);
    });
    obser
    .catch((err) => Rx.Observable.of(err))
    .subscribe(...functions);
    // también con promises solo usa fromPromise
    
    const sourceInterval$ = Rx.Observable.interval(1000).take(2);
    sourceInterval$.subscribe(...functions);

    const sourceTimer$ = Rx.Observable.timer(10000,1000)
    .take(5)
    .map( v => 2*v )
    .map( x => 'this is a number doubled : '+x);
    sourceTimer$.subscribe(...functions);

    const sourceRange$ = Rx.Observable.range(0,10);
    sourceRange$.subscribe(...functions);

    const posts = [
      {title: 'Post ONE', body: 'This is the body'},
      {title: 'Post TWO', body: 'This is the body'},
      {title: 'Post THREE', body: 'This is the body'},
    ];
    const posts$ = Rx.Observable.from(posts).pluck('title');
    posts$.subscribe(...functions);

    Rx.Observable.of('Hello') // this does both "at the same time"
      .merge(Rx.Observable.of('Everyone'))
      .subscribe(x => console.log(x));
    Rx.Observable.merge(
      Rx.Observable.interval(1000).map(x => 'merge1: '+x),
      Rx.Observable.interval(2000).map(x => 'merge2: '+x))
      .take(5)
      .subscribe(x => console.log(x));

    Rx.Observable.concat( // This does one after another
      Rx.Observable.range(0,5).map(x => 'concat1: '+x),
      Rx.Observable.range(6,5).map(x => 'concat2: '+x))
      .subscribe(x => console.log(x));
    
    // To use a observable inside another obervable
    Rx.Observable.of('holi')
      .mergeMap( v =>{
        return Rx.Observable.of(v+' a todos');
      })
      .subscribe(x => console.log(x));

    //switchMap can be done also, and it very similar but it transforms the items that are emmited into observables and then flatten the emitions into a single observable, this is called flat app in rxjs 4.
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello sir</h1>
        <button ref={this.btn}>click me!</button>
      </React.Fragment>
    );
  }
}

export default App;
