import { Component, OnInit } from '@angular/core';
import { DegreeService } from 'app/services/api/degree.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast } from 'app/lib/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-degree',
  templateUrl: './add-degree.component.html',
  styleUrls: ['./add-degree.component.scss']
})
export class AddDegreeComponent implements OnInit {

  public typesOptions: any;

  public degreeForm: FormGroup;

  constructor(
    private degreeService: DegreeService,
    private fb: FormBuilder,
    private toast: Toast,
    private router: Router
  ) { }

  ngOnInit() {
    this.degreeService.getTypes().subscribe(res => this.typesOptions = res.data);

    this.degreeForm = this.fb.group({
      typeId: ['', [Validators.required]],
      issueDate: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

  }

  public submit() {

    if (this.degreeForm.valid) {

      const { value } = this.degreeForm;
      const ngbDate = value.issueDate;

      const degree = {
        typeId: value.typeId,
        description: value.description,
        issueDate: new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day),
      }

      this.degreeService.post(degree)
        .subscribe(
          (res) => {
            this.toast.success('Criado com sucesso');
            this.router.navigate(['degrees']);
          },
          () => {
            this.toast.warning('Ocorreu um problema no processamento');
          });
    }

  }

}
