import { InPatientModule } from './in-patient.module';

describe('InPatientModule', () => {
  let inPatientModule: InPatientModule;

  beforeEach(() => {
    inPatientModule = new InPatientModule();
  });

  it('should create an instance', () => {
    expect(inPatientModule).toBeTruthy();
  });
});
