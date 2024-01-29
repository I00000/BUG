const { promisify } = require('util');
const { exec, execSync } = require('child_process');

const execAsync = promisify(exec);

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
    try {
        let result = execSync('git pull');
        console.log(result);

    } catch (error) {
        console.error(error);
    }
    let cmd = 'git commit -a -m "message1"';
    try {
        result = execSync(cmd);
        console.log(result);
    } catch (error) {
        if (error.message === `Command failed: ${cmd}`) {
            error.stdout = error.stdout?.toString();
            error.stderr = error.stderr?.toString();
        }
        console.error(error);
    }
    try {
        result = execSync('git push');
        console.log(result);

    } catch (error) {
        console.error(error);
    }
}
main2();