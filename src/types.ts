export type StepProps = {
  currentStep: number;
  firstName: string;
  lastName: string;
  phoneNumber: number | undefined;
  verificationCode: number | undefined;
  changeStep: Function;
};
