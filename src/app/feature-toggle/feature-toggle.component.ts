import { Component, ElementRef, Input, NgZone } from '@angular/core';

import { FeatureToggleService } from './feature-toggle.service';

@Component({
  selector: 'feature-toggle',
  standalone: true,
  template: '<ng-content *ngIf="isEnabled"></ng-content>',
})
export class FeatureToggleComponent {
  @Input() featureName: string | undefined;
  isEnabled = false;
  private featureIsEnabled = false;

  constructor(
    private _featureService: FeatureToggleService,
    private _el: ElementRef,
    private _zone: NgZone
  ) {}

  ngOnInit(): void {
    if (!this.featureName) {
      throw new Error('Attribute `featureName` should not be null or empty');
    }
    this.checkIfContentShouldBeRendered();
  }

  ngDoCheck(): void {
    this._zone.runOutsideAngular(() => {
      this.checkIfContentShouldBeRendered();
    });
  }

  private checkIfContentShouldBeRendered() {
    const showWhenDisabled =
      this._el.nativeElement.getAttribute('showWhenDisabled') !== null;
    const toggleState = this._featureService.isEnabled(this.featureName);

    this.featureIsEnabled = toggleState === !showWhenDisabled;
    if (this.isEnabled !== this.featureIsEnabled) {
      this.isEnabled = this.featureIsEnabled;
    }
  }
}
