import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  private renderPersonalLinks(): any[]{
    return ['github', 'linkedin', 'stackoverflow', 'resume'].map(key => <app-personal-links contentKey={key}></app-personal-links>)
  }

  private renderPersonalSectionButtons(): any[]{
    return ['About', 'Tech_Talks', 'Open_Source'].map(key => <app-personal-section sectionKey={key}></app-personal-section>)
  }

  render() {
    return (
      <slot>
      <div class='row'>
        { this.renderPersonalLinks() }
      </div>
        <div class='row'>
          {this.renderPersonalSectionButtons()}
        </div>
        <app-sections content={"Entry - Mid level software developer and former technical management consultant with strong financial services and government contracting background. " +
        "Experienced in JavaScript, Node.js, React, React-Redux, and GraphQl. Professional with a Bachelor's degree focused in Political Science and Government from Fordham University.\n" +
        "\n" + "I currently work at American Express on the Benefits Dashboard team as a software developer."}></app-sections>
      </slot>
    );
  }
}
