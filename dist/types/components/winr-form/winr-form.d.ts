export declare class WinrForm {
  submitBtns: NodeListOf<HTMLWinrBtnElement>;
  inputObserver: MutationObserver;
  native: string;
  el: HTMLWinrFormElement;
  innerNative: {
    [key: string]: string | number | boolean;
  };
  get form(): HTMLFormElement;
  componentWillLoad(): void;
  componentDidRender(): void;
  componentDidLoad(): void;
  parseNative(newValue: string): void;
  submit(): void;
  findSubmitBtns(): NodeListOf<HTMLWinrBtnElement>;
  setValidState(): void;
  render(): any;
}
