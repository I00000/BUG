const { promisify } = require('util');
const { exec, execSync } = require('child_process');
const GitCommand = require('./GitCommand');
const git = new GitCommand();

const execAsync = promisify(exec);

async function lsExample() {
  const result = await execSync('ls');
  console.log('stdout:', result.toString());
  console.error('stderr:', result.stderr);
}
lsExample();

async function executeGitCommand(command) {
    try {
        const { stdout, stderr } = await execAsync(command);
        if (stderr) {
            throw new Error(stderr);
        }
        return stdout.trim();
    } catch (error) {
        throw new Error(`Failed to execute git command: ${error}`);
    }
}

async function commit(message) {
    let stdout, stderr;
    try {

    } catch (ex) {
        throw ex;
    }
    return { stdout, stderr };
}

async function main() {
    try {
        let result = await executeGitCommand('git pull');
        console.log(result);

    } catch (error) {
        console.error(error);
    }
    try {
        result = await executeGitCommand('git commit -a -m "message1"');
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    try {
        result = await executeGitCommand('git push');
        console.log(result);

    } catch (error) {
        console.error(error);
    }
}

//main();


function main2() {
    let cmd = 'git pull';
    console.log('cmd:', cmd);

    try {
        let result = git.pullCommand();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    cmd = 'git commit -a -m "message1"';
    console.log('cmd:', cmd);
    try {
        result = git.commitCommand('message1');
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    cmd = 'git push';
    console.log('cmd:', cmd);
    try {
        let result = git.pushCommand();
        console.log(result);

    } catch (error) {
        console.error(error);
    }
}
main2();