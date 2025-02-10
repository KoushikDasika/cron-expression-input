declare class CronExpressionInputType extends HTMLElement {
  constructor();
  
  // Properties
  height: string;
  width: string;
  color: string;
  required: boolean;
  hotValidate: boolean;
  value: string;
  
  // Methods
  getValue(): string;
  setValue(value: string): void;
  validate(): boolean;
  
  // Events
  addEventListener(type: 'change', listener: (event: CustomEvent<string>) => void): void;
  addEventListener(type: 'validate', listener: (event: CustomEvent<boolean>) => void): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'cron-expression-input': CronExpressionInputType;
  }
}
