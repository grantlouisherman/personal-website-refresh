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
        <about-section></about-section>
        <open-source></open-source>
      </slot>
    );
  }
}
