var schedule = require('node-schedule');

const execSync  = require('child_process').execSync

var rule = new schedule.RecurrenceRule();

rule.date = 10

var cmdStr1 = 'service nginx stop'
var cmdStr2 = 'certbot renew --force-renewal'
var comStr3 = 'service nginx start'

var j = schedule.scheduleJob(rule, async() => {
    await execSync(cmdStr1, function(err,stdout,stderr){
        if(err) {
            console.log(stderr);
        } else {
            console.log(stdout);
        }
    })
    await execSync(cmdStr2, function(err,stdout,stderr){
        if(err) {
            console.log(stderr);
        } else {
            console.log(stdout);
        }
    })
    await execSync(comStr3, function(err,stdout,stderr){
        if(err) {
            console.log(stderr);
        } else {
            console.log(stdout);
        }
    })
});
