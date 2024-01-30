const GitCommand = require('./GitCommand');
const git = new GitCommand();

function main() {
    let cmd = 'git pull';
    console.log('cmd:', cmd);

    try {
        let result = git.pullCommand().toString();
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
main();