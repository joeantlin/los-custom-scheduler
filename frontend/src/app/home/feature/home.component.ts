import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/shared/data-access/test.service';
import { SuperHero } from 'src/app/shared/utils/test-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  heroes: SuperHero[] = [];

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.testService.getSuperHeroes().subscribe((result: SuperHero[]) => {
      this.heroes = result;
      console.log(this.heroes);
    });
  }
}
