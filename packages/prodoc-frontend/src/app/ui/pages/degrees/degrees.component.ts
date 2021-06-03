import { Component, OnInit } from '@angular/core';
import { DegreeService } from 'app/services/api/degree.service';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {

  public tableData: any;

  constructor(private degreeService: DegreeService) { }

  ngOnInit() {
    this.degreeService.get().subscribe(res => this.tableData = res.data);
  }

  deleteDegree(id) {
    this.degreeService.delete(id).subscribe(() => {
      this.tableData = this.tableData.filter(row => row.id !== id);
    });
  }

}
