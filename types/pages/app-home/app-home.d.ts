import { LitElement } from 'lit';
import '@awesome.me/webawesome/dist/components/card/card.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
export declare class AppHome extends LitElement {
    message: string;
    counter: number;
    static styles: import("lit").CSSResult[];
    share(): void;
    render(): import("lit-html").TemplateResult<1>;
    increment(): void;
}
