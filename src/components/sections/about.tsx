import { Component, h } from '@stencil/core';

@Component({
  tag: 'about-section',
  styleUrl: 'sections.css',
  shadow: true
})
export class About {

  render() {
    return (
      <div>
        <hr/>
        <div id="About section">
          Entry - Mid level software developer and former technical management consultant with strong financial services and government contracting background.
          Experienced in JavaScript, Node.js, React, React-Redux, and GraphQl. Professional with a Bachelor's degree focused in Political Science and Government from Fordham University.
          I currently work at American Express on the Benefits Dashboard team as a software developer."
        </div>
        <hr/>
      </div>
    );
  }
}
