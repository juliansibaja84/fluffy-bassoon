import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GitHub Browser';
  constructor(private gitSearchService: GitSearchService) {
  }
  ngOnInit() {
    /*
    this.gitSearchService.gitUsersSearch('juliansibaja84').then((response) => {
      alert('Total Users Found:' + response.total_count);
    }, (error) => {
      alert('Error: ' + error.statusText);
    });*/
  }
}
