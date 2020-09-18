import { EventEmitter } from '../../stencil-public-runtime';
export declare class WinrModal {
  caption: string;
  shown: boolean;
  opened: EventEmitter;
  closed: EventEmitter;
  el: HTMLElement;
  show(): Promise<void>;
  hide(): Promise<void>;
  handleBackdropClick(e: MouseEvent): void;
  render(): any;
}
