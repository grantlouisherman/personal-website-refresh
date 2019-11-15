import { Component, Prop, h } from '@stencil/core';

interface personalLinkObject{
  key: string;
  link: string;
  icon: string;
  download: boolean;
}

@Component({
  tag: 'app-personal-links',
  styleUrl: 'app-personal-links.css',
  shadow: true
})
export class PersonalLinks {
  @Prop() contentKey: string

  private getLinksForImages(): Array<personalLinkObject>{
    return [{
      "key": "github",
      "link": "https://github.com/grantlouisherman",
      "icon": "../../assets/images/github.png",
      "download": false
    },
    {
      "key": "linkedin",
      "link": "https://www.linkedin.com/in/grant-herman-3b34258a/",
      "icon": "../../assets/images/linkedin.png",
      "download": false
    },
    {
      "key": "stackoverflow",
      "link": "https://stackoverflow.com/users/4732217/grant-herman",
      "icon": "../../assets/images/stackoverflow.png",
      "download": false
    },
    {
      "key": "resume",
      "link": "./additionalContent/resume.pdf",
      "icon": "../assets/images/resume.png",
      "download": true
    }]
  }

  private resolveContentForCard(): personalLinkObject {
    return this.getLinksForImages().find((content) => content.key === this.contentKey)
  }
  render() {
    const contentForCard: personalLinkObject = this.resolveContentForCard()
    return (
      <div>
        <label>
          {contentForCard.key}
          <a href={contentForCard.link}>
            <img id="img" width="100" height="100" src={contentForCard.icon} /> 
          </a>
          <hr />
        </label>         
      </div>

    );
  }

}
