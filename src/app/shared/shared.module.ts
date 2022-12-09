import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,

    // material components
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSortModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,

    // material components
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSortModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
  ],
})
export class SharedModule {}
