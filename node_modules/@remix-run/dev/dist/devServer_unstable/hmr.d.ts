import type { RemixConfig } from "../config";
import { type Manifest } from "../manifest";
export type Update = {
    id: string;
    url: string;
    revalidate: boolean;
    reason: string;
};
export declare let updates: (config: RemixConfig, manifest: Manifest, prevManifest: Manifest) => Update[];
