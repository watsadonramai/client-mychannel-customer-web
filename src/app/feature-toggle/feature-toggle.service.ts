import { Injectable } from '@angular/core';
import { features } from './features.config';
@Injectable()
export class FeatureToggleService {
  isEnabled(feature: string) {
    let result = false;
    if (features[feature as keyof typeof features]) {
      result = features[feature as keyof typeof features];
    }
    return result;
  }
}
