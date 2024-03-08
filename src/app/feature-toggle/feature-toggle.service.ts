import { Injectable } from '@angular/core';
import { features } from './features.config';
@Injectable()
export class FeatureToggleService {
  isEnabled(feature: string) {
    let result = false;
    if (features[feature]) {
      result = features[feature];
    }
    return result;
  }
}
