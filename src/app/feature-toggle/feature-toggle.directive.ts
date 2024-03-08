import { Directive, ElementRef, Input } from '@angular/core';
import { FeatureToggleService } from './feature-toggle.service';

@Directive({
  selector: '[featureToggle]',
})
export class FeatureToggleDirective {
  @Input() featureToggle: string;

  constructor(
    private _featureService: FeatureToggleService,
    private _el: ElementRef
  ) {}

  ngOnInit(): void {
    if (!this.featureToggle) {
      throw new Error('Attribute `featureName` should not be null or empty');
    }
    this.checkIfContentShouldBeRendered();
  }

  private checkIfContentShouldBeRendered() {
    if (!this._featureService.isEnabled(this.featureToggle)) {
      this._el.nativeElement.remove();
    }
  }
}
