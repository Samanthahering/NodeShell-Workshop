//Output a prompt
process.stdout.write('prompt > ');


//the stdin 'data' fires after the user types in a line
process.stdin.on('data', (data) => {
    
    const cmd = data.toString().trim(); //remove the new line
    

    process.stdout.write('You typed: ' + cmd);

    process.stdout.write('\nprompt > ');
})

