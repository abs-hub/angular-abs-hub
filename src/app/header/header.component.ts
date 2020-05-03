import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sub: any;
  userName: string = '';
  title: string = 'Books';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.userName = params['username'];
    });
  }
  onLogout() {
    this.router.navigate(['/']);
  }
}
