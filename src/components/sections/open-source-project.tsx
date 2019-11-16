import { Component, Prop, h } from '@stencil/core';
import { OpenSourceLink } from './open-source';

@Component({
  tag: 'open-source-project',
  styleUrl: 'sections.css',
  shadow: true
})
export class OpenSource {
  @Prop() projectName: string
  @Prop() openSourceContributions: Array<OpenSourceLink>
  render() {
    return (
      <div>
        <h4>{this.projectName}</h4>
        <ul>
        {
            this.openSourceContributions.map(contrib => (
                <li>
                  <a href={`${contrib.link}`}>
                      {contrib.description}
                  </a>  
                </li>
            ))
        }
        </ul>
      </div>
    );
  }
}