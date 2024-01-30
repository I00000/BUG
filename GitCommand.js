'use strict';
const { execSync } = require('child_process');

class GitCommand {

    executeGitCommand(command) {
        try {
            return execSync(command);
        } catch (error) {
            error.output = error.output.map(output => output ? output.toString() : '');
            error.stdout = error.stdout?.toString();
            error.stderr = error.stderr?.toString();
            throw error;
        }
    }

    pullCommand() {
        const cmd = 'git pull';
        return this.executeGitCommand(cmd);
    }

    commitCommand(message) {
        const cmd = `git commit -a -m "${message}"`;
        let res;
        try {
            res = this.executeGitCommand(cmd);
        } catch (error) {
            if (error.message !== `Command failed: ${cmd}`) {
                throw error;
            }
        }
        return res;
    }

    pushCommand() {
        const cmd = 'git push';
        return this.executeGitCommand(cmd);
    }

}

module.exports = GitCommand; 