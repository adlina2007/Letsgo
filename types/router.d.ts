import { nothing, type TemplateResult } from 'lit';
export interface Route {
    /** Fully-resolved pathname to match (see resolveRouterPath). */
    path: string;
    /** Optional document title applied when the route becomes active. */
    title?: string;
    /** Renders the route's view. */
    render: () => TemplateResult;
    /** Optional lazy loader run before the first render of the route. */
    load?: () => Promise<unknown>;
}
export interface RouterConfig {
    routes: Route[];
    /** Rendered when no route matches. */
    fallback?: Route;
}
export declare class Router extends EventTarget {
    readonly routes: Route[];
    private readonly fallback?;
    private content;
    constructor(config: RouterConfig);
    /** Returns the current route's rendered template for the host element. */
    render(): TemplateResult | typeof nothing;
    private onNavigate;
    private match;
    private activate;
    private setContent;
}
export declare const router: Router;
export declare function resolveRouterPath(unresolvedPath?: string): string;
