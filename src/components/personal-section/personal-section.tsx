import { Component, h, Prop } from '@stencil/core';

interface SectionLink {
  sectionName: string;
  buttonText: string;
}

@Component({
  tag: 'app-personal-section',
  styleUrl: 'personal-section.css',
  shadow: true
})
export class PersonalSection {
  @Prop() sectionKey: string

  private getSectionData(sectionKey: string): SectionLink {
    const sectionButtonData: Array<SectionLink> = [
      {
        sectionName: 'About',
        buttonText: 'About'
      },
      {
        sectionName: 'Tech_Talks',
        buttonText: 'Tech Talks'
      },
      {
        sectionName: 'Open_Source',
        buttonText: 'Open Source'
      },
    ]
    return sectionButtonData.find(section => section.sectionName === sectionKey)
  }

  render() {
    const resolveSection: SectionLink = this.getSectionData(this.sectionKey)
    return (
      <a href={`#${resolveSection.sectionName}`} class="center">
      <button class='btn'>
          { resolveSection.buttonText }
      </button>
      </a>

    );
  }

}
