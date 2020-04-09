import { OutPatientModule } from './out-patient.module';

describe('OutPatientModule', () => {
  let outPatientModule: OutPatientModule;

  beforeEach(() => {
    outPatientModule = new OutPatientModule();
  });

  it('should create an instance', () => {
    expect(outPatientModule).toBeTruthy();
  });
});
