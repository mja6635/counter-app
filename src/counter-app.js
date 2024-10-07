import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class CounterApp extends DDDSuper(LitElement) {
  static get tag() {
    return "counter-app";
  }

  constructor() {
    super();
    this.title = "Counter App";
    this.count = 0;
    this.min = 0;
    this.max = 25;
  }

  static get properties() {
    return {
      title: { type: String },
      count: { type: Number },
      min: { type: Number },
      max: { type: Number },
    };
  }

  static get styles() {
    return [
      ...(super.styles || []), 
      css`
        :host {
          display: block;
          color: var(--ddd-theme-default-nittanyNavy);
          background-color: var(--ddd-theme-default-potential50);
          font-family: var(--ddd-font-navigation);
          font-size: var(--counter-app-font-size, var(--ddd-font-size-s));
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          text-align: center;
        }
        .count {
          font-size: 2rem;
          margin-bottom: var(--ddd-spacing-2);
        }
        button {
          margin: var(--ddd-spacing-1);
          padding: var(--ddd-spacing-2);
          font-size: 1rem;
          cursor: pointer;
        }
        button:disabled {
          background-color: gray;
          cursor: not-allowed;
        }
      `
    ];
  }

  increment() {
    if (this.count < this.max) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > this.min) {
      this.count--;
    }
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="count">${this.count}</div>
        <button @click="${this.increment}">Increase</button>
        <button @click="${this.decrement}">Decrease</button>
        <div>${this.title}</div>
        <slot></slot>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}


globalThis.customElements.define(CounterApp.tag, CounterApp);
