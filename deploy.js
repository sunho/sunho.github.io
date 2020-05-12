var ghpages = require('gh-pages');
const { exec } = require("child_process");
exec("hugo", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    ghpages.publish('public', {branch:'master'}, function(err) {console.log(err)});
});
