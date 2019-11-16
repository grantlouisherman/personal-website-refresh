import { Component, h } from '@stencil/core';

export interface OpenSourceLink {
    description: string;
    link: string;
}
interface OpenSourceContribution {
    projectName: string;
    PRS: Array<OpenSourceLink>;
}
@Component({
  tag: 'open-source',
  styleUrl: 'sections.css',
  shadow: true
})
export class OpenSource {
  private getOpenSourceContributions():Array<OpenSourceContribution> {
      return [
          {
            projectName: 'JS-IPFS',
            PRS: [{
                description: 'Creating multiple servers based on user configuration of ipfsjs',
                link: 'https://github.com/grantlouisherman/js-ipfs/commit/4ad104d85d813c2016f4abcafb46dfb5f0bba23b'
            }]
          },
          {
              projectName: 'SCRIPT-8',
              PRS: [
                  {
                      description: 'Bugfix for unwated scroll bar',
                      link: 'https://github.com/script-8/script-8.github.io/pull/163'
                  },
                  {
                      description: 'Creating ability to highlight specfic line of code in tutorial',
                      link: 'https://github.com/script-8/script-8.github.io/pull/197/commits'
                  }
              ]
          },
          {
              projectName: 'Deck Deck Go',
              PRS: [
                  {
                      description: 'Created Dark Mode switch',
                      link: 'https://github.com/deckgo/deckdeckgo/pull/398'
                  }
              ]
          }
      ]
  }
  render() {
    return (
      <div>
        <div id="section">
            {
                this.getOpenSourceContributions().map(projects => (
                    <open-source-project 
                    openSourceContributions={projects.PRS}
                    projectName={projects.projectName}
                    >
                    </open-source-project>
                ))
            }
        </div>
        <hr/>
      </div>
    );
  }
}