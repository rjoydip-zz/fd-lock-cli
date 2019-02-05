import { command, parse, version, outputHelp } from "commander";
import { version as _version, lock, unlock } from "./commands";

const { argv, cwd } = process;

(() => {
  command("lock [file]")
    .description("Lock a file")
    .action(file => lock(file, cwd()));

  command("unlock [file]")
    .description("Unlock a file")
    .action(file => unlock(file, cwd()));

  version(_version, "-v, --version");

  if (!argv.slice(2).length) {
    return outputHelp();
  }

  parse(argv);
})();
