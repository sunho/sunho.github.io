var ghpages = require('gh-pages');
const { exec } = require("child_process");
exec("JEKYLL_ENV=production bundle exec jekyll build", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    ghpages.publish('_site', {branch:'master'}, function(err) {console.log(err)});
});
