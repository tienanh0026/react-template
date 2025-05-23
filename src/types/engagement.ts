export type StepLabel = 'Upload' | 'Mapping' | 'Analytics' | 'Completed';

export interface Step {
  label: StepLabel;
  count?: number;
  alert?: boolean;
  active?: boolean;
  isAvailable?: boolean;
}
