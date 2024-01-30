const GitCommand = require('./GitCommand');
const git = new GitCommand();

function main() {
    let cmd = 'git pull';
    console.log('cmd:', cmd);

    try {
        let result = git.pullCommand();
        console.log('result', result);
    } catch (error) {
        console.error(error);
    }
    cmd = 'git commit -a -m "message1"';
    console.log('cmd:', cmd);
    try {
        result = git.commitCommand('message1');
        console.log('result', result);
    } catch (error) {
        console.error(error);
    }
    cmd = 'git push';
    console.log('cmd:', cmd);
    try {
        let result = git.pushCommand();
        console.log('result', result);

    } catch (error) {
        console.error(error);
    }
}
main();