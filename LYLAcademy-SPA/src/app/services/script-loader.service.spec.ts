/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScriptLoaderService } from './script-loader.service';

describe('Service: ScriptLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptLoaderService]
    });
  });

  it('should ...', inject([ScriptLoaderService], (service: ScriptLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
