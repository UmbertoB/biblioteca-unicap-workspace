import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'app/services/api/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  
  public tableData: any;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.get().subscribe(res => this.tableData = res.data);
  }

}
