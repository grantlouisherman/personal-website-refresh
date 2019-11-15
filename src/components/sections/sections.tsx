import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-sections',
  styleUrl: 'sections.css',
  shadow: true
})
export class Sections {
  @Prop() content: string
  render() {
    return (
      <Host>
        <slot>
          { this.content }
        </slot>
      </Host>
    );
  }

}
