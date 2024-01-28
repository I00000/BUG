const { promisify } = require('util');
const { exec } = require('child_process');

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
exec('git commit -a -m "message1"', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Git command: ${error}`);
      return;
    }
  
    // Process the output
    console.log(`Git output: ${stdout}`);
    console.error(`Git errors: ${stderr}`);
  });