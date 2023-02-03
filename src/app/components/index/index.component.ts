import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  searchForm: FormGroup = new UntypedFormGroup({
    text: new FormControl('', [
      Validators.pattern(/^[A-Za-z]+$/),
      Validators.required,
    ]),
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  doSearch(): void {
    const searchText = this.searchForm.get('text')?.value;
    this.router.navigateByUrl('/search/' + searchText);
  }

  ngOnInit() {
    // Patch the form when the page reloads if there's a search query
    this.route.paramMap.pipe(untilDestroyed(this)).subscribe((params) => {
      this.searchForm.patchValue({
        text: params.get('query'),
      });
    });
  }
}
