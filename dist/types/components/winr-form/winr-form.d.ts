export declare class WinrForm {
  submitBtns: NodeListOf<HTMLWinrBtnElement>;
  inputObserver: MutationObserver;
  el: HTMLWinrFormElement;
  get form(): HTMLFormElement;
  componentDidRender(): void;
  componentDidLoad(): void;
  submit(): void;
  findSubmitBtns(): NodeListOf<HTMLWinrBtnElement>;
  setValidState(): void;
  render(): any;
}
