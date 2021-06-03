import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'app/services/api/activity.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast } from 'app/lib/toast';
import { Router } from '@angular/router';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  public typesOptions: any;

  public activityForm: FormGroup;

  public now: Date = new Date();

  constructor(
    private activityService: ActivityService,
    private fb: FormBuilder,
    private toast: Toast,
    private router: Router
  ) { }

  ngOnInit() {
    this.activityService.getTypes().subscribe(res => this.typesOptions = res.data);

    this.activityForm = this.fb.group({
      typeId: ['', [Validators.required]],
      activityDate: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

  }

  public submit() {

    if (this.activityForm.valid) {

      const { value } = this.activityForm;
      const ngbDate = value.activityDate;

      const activity = {
        typeId: value.typeId,
        description: value.description,
        activityDate: new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day),
      }

      this.activityService.post(activity)
        .subscribe(
          (res) => {
            this.toast.success('Criado com sucesso');
            this.router.navigate(['activities']);
          },
          () => {
            this.toast.warning('Ocorreu um problema no processamento');
          });
    }

  }

}
