import { stat, openSync } from "fs";
import { promisify } from "util";
import { join } from "path";
const fdLock = require("fd-lock");
import { error, success, warn, display } from "../utils/logger";

const fsStatAsync = promisify(stat);
const { stdin } = process;

export const lock = async (file: any, cwd: string) => {
  try {
    const filepath: string = join(cwd, file);
    await fsStatAsync(filepath);
    const isFileLocked = fdLock(openSync(filepath, "r"));
    if (isFileLocked) {
      display(`${warn(file)} locked successfully`);
      display(
        success(
          "Keeping the program running...\nTry running the example again in another process"
        )
      );
      stdin.resume();
    } else {
      display(error(`${warn(file)} already locked`));
    }
  } catch (err) {
    display(error(err));
  }
};

export const unlock = async (file: any, cwd: string) => {
  try {
    const filepath: string = join(cwd, file);
    await fsStatAsync(filepath);
    const isFileUnlocked = fdLock.unlock(openSync(filepath, "r"));
    if (isFileUnlocked) {
      display(`${warn(file)} unlocked successfully`);
    } else {
      display(error(`${warn(file)} already unlocked`));
    }
  } catch (err) {
    display(error(err));
  }
};
