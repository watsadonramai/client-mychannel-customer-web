import { NgModule } from '@angular/core';
import { FeatureToggleService } from './feature-toggle.service';
import { FeatureToggleComponent } from './feature-toggle.component';
import { CommonModule } from '@angular/common';
import { FeatureToggleDirective } from './feature-toggle.directive';

@NgModule({
  imports: [CommonModule, FeatureToggleComponent],
  declarations: [FeatureToggleDirective],
  exports: [FeatureToggleComponent, FeatureToggleDirective],
  providers: [FeatureToggleService],
})
export class FeatureToggleModule {}
