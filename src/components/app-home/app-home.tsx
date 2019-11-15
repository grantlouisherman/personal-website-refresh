import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <slot>
      <div class='app-home row'>
          <app-personal-links contentKey={'github'}></app-personal-links>
          <app-personal-links contentKey={'linkedin'}></app-personal-links>
          <app-personal-links contentKey={'stackoverflow'}></app-personal-links>
          <app-personal-links contentKey={'resume'}></app-personal-links>
      </div>
        <div class='row'>
          <app-personal-section sectionKey={'About'}></app-personal-section>
          <app-personal-section sectionKey={'Tech_Talks'}></app-personal-section>
          <app-personal-section sectionKey={'Open_Source'}></app-personal-section>
        </div>
      </slot>
    );
  }
}
