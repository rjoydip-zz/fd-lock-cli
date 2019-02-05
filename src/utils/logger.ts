import chalk from "chalk";

export const { log } = console;
export const info = (msg: any) => chalk.blue(msg);
export const success = (msg: any) => chalk.green(msg);
export const error = (msg: any) => chalk.red(msg);
export const debug = (msg: any) => chalk.yellow(msg);
export const warn = (msg: any) => chalk.yellow(msg);
export const display = (msg: any) => log(msg);
