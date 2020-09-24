export declare class WinrForm {
  el: HTMLWinrFormElement;
  submitBtns: NodeListOf<HTMLWinrBtnElement>;
  inputObserver: MutationObserver;
  get form(): HTMLFormElement;
  componentDidRender(): void;
  componentDidLoad(): void;
  submit(): void;
  findSubmitBtns(): NodeListOf<HTMLWinrBtnElement>;
  setValidState(): void;
  render(): any;
}
