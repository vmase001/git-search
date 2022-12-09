import { Component } from '@angular/core';
import {
  Form,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  searchForm!: UntypedFormGroup;

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder
  ) {}

  doSearch(): void {
    const searchText = this.searchForm.get('text')?.value;
    this.router.navigateByUrl('/search/' + searchText);
  }

  ngOnInit() {
    // assuming the user can only input characters and not numbers
    this.searchForm = this.formBuilder.group({
      text: ['', Validators.pattern(/^[A-Za-z]+$/)],
    });
  }
}
