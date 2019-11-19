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
      <div>
        <h1 id='open_modal' class='section_model_text'>{resolveSection.buttonText}</h1>
        <div class="modal">
          <div class="modal-content">
            <span id="close-model" class="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
      
    );
  }
}
