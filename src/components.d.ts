/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppPersonalLinks {
    'contentKey': string;
  }
  interface AppPersonalSection {
    'sectionKey': string;
  }
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppPersonalLinksElement extends Components.AppPersonalLinks, HTMLStencilElement {}
  var HTMLAppPersonalLinksElement: {
    prototype: HTMLAppPersonalLinksElement;
    new (): HTMLAppPersonalLinksElement;
  };

  interface HTMLAppPersonalSectionElement extends Components.AppPersonalSection, HTMLStencilElement {}
  var HTMLAppPersonalSectionElement: {
    prototype: HTMLAppPersonalSectionElement;
    new (): HTMLAppPersonalSectionElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-personal-links': HTMLAppPersonalLinksElement;
    'app-personal-section': HTMLAppPersonalSectionElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppPersonalLinks {
    'contentKey'?: string;
  }
  interface AppPersonalSection {
    'sectionKey'?: string;
  }
  interface AppProfile {
    'match'?: MatchResults;
  }
  interface AppRoot {}

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-personal-links': AppPersonalLinks;
    'app-personal-section': AppPersonalSection;
    'app-profile': AppProfile;
    'app-root': AppRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-personal-links': LocalJSX.AppPersonalLinks & JSXBase.HTMLAttributes<HTMLAppPersonalLinksElement>;
      'app-personal-section': LocalJSX.AppPersonalSection & JSXBase.HTMLAttributes<HTMLAppPersonalSectionElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
    }
  }
}

