import { NgModule } from "@angular/core";
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import {
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatRippleModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatNativeDateModule,
  MatTreeModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatDividerModule
} from "@angular/material";

import {
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatCheckboxModule,
  MatListModule
} from "@angular/material";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { StringFilterByPipe } from 'app/shared/sting-filterby';

@NgModule({
  declarations: [ 
    StringFilterByPipe
  ],
  providers:[StringFilterByPipe],
  exports: [
    StringFilterByPipe,
     NgxMatSelectSearchModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatTreeModule,
    MatRippleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatDividerModule
  ]
})
export class SharedMaterialModule {}
