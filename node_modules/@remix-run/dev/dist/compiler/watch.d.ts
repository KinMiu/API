import type { RemixConfig } from "../config";
import { type Manifest } from "../manifest";
import type { Context } from "./context";
export type WatchOptions = {
    reloadConfig?(root: string): Promise<RemixConfig>;
    onBuildStart?(ctx: Context): void;
    onBuildFinish?(ctx: Context, durationMs: number, manifest?: Manifest): void;
    onFileCreated?(file: string): void;
    onFileChanged?(file: string): void;
    onFileDeleted?(file: string): void;
};
export declare function watch(ctx: Context, { reloadConfig, onBuildStart, onBuildFinish, onFileCreated, onFileChanged, onFileDeleted, }?: WatchOptions): Promise<() => Promise<void>>;
