import { sync } from "find-up";

const pkg: any = sync("package.json");

export * from "./locker";
export const version = pkg["version"] || "0.0.0";
