/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LEvent {
        "event": string;
    }
    interface LEvents {
    }
    interface LHeader {
    }
    interface LHero {
    }
    interface LMember {
        "avatar": string;
        "bio": string;
        "links": string;
        "name": string;
        "position": string;
    }
    interface LTeam {
    }
}
declare global {
    interface HTMLLEventElement extends Components.LEvent, HTMLStencilElement {
    }
    var HTMLLEventElement: {
        prototype: HTMLLEventElement;
        new (): HTMLLEventElement;
    };
    interface HTMLLEventsElement extends Components.LEvents, HTMLStencilElement {
    }
    var HTMLLEventsElement: {
        prototype: HTMLLEventsElement;
        new (): HTMLLEventsElement;
    };
    interface HTMLLHeaderElement extends Components.LHeader, HTMLStencilElement {
    }
    var HTMLLHeaderElement: {
        prototype: HTMLLHeaderElement;
        new (): HTMLLHeaderElement;
    };
    interface HTMLLHeroElement extends Components.LHero, HTMLStencilElement {
    }
    var HTMLLHeroElement: {
        prototype: HTMLLHeroElement;
        new (): HTMLLHeroElement;
    };
    interface HTMLLMemberElement extends Components.LMember, HTMLStencilElement {
    }
    var HTMLLMemberElement: {
        prototype: HTMLLMemberElement;
        new (): HTMLLMemberElement;
    };
    interface HTMLLTeamElement extends Components.LTeam, HTMLStencilElement {
    }
    var HTMLLTeamElement: {
        prototype: HTMLLTeamElement;
        new (): HTMLLTeamElement;
    };
    interface HTMLElementTagNameMap {
        "l-event": HTMLLEventElement;
        "l-events": HTMLLEventsElement;
        "l-header": HTMLLHeaderElement;
        "l-hero": HTMLLHeroElement;
        "l-member": HTMLLMemberElement;
        "l-team": HTMLLTeamElement;
    }
}
declare namespace LocalJSX {
    interface LEvent {
        "event"?: string;
    }
    interface LEvents {
    }
    interface LHeader {
    }
    interface LHero {
    }
    interface LMember {
        "avatar"?: string;
        "bio"?: string;
        "links"?: string;
        "name"?: string;
        "position"?: string;
    }
    interface LTeam {
    }
    interface IntrinsicElements {
        "l-event": LEvent;
        "l-events": LEvents;
        "l-header": LHeader;
        "l-hero": LHero;
        "l-member": LMember;
        "l-team": LTeam;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "l-event": LocalJSX.LEvent & JSXBase.HTMLAttributes<HTMLLEventElement>;
            "l-events": LocalJSX.LEvents & JSXBase.HTMLAttributes<HTMLLEventsElement>;
            "l-header": LocalJSX.LHeader & JSXBase.HTMLAttributes<HTMLLHeaderElement>;
            "l-hero": LocalJSX.LHero & JSXBase.HTMLAttributes<HTMLLHeroElement>;
            "l-member": LocalJSX.LMember & JSXBase.HTMLAttributes<HTMLLMemberElement>;
            "l-team": LocalJSX.LTeam & JSXBase.HTMLAttributes<HTMLLTeamElement>;
        }
    }
}
