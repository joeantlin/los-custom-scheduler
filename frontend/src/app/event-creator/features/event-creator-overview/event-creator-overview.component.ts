import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-creator-overview',
  templateUrl: './event-creator-overview.component.html',
  styleUrls: ['./event-creator-overview.component.scss'],
})
export class EventCreatorOverviewComponent implements OnInit {
  public eventType: string | null = 'None';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('type')) {
        this.eventType = params.get('type');
      }
    });
  }

  ngOnInit(): void {}
}
