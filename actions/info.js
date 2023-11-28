const chalk = require('chalk')
const { readFileSync } = require('node:fs')
const { join } = require('node:path')

const BANNER = `
________   ________  ________  _________  ________  ___       ___     
|\\   ___  \\|\\   __  \\|\\   ____\\|\\___   ___\\\\   ____\\|\\  \\     |\\  \\    
\\ \\  \\\\ \\  \\ \\  \\|\\  \\ \\  \\___|\\|___ \\  \\_\\ \\  \\___|\\ \\  \\    \\ \\  \\   
 \\ \\  \\\\ \\  \\ \\  \\\\\\  \\ \\_____  \\   \\ \\  \\ \\ \\  \\    \\ \\  \\    \\ \\  \\  
  \\ \\  \\\\ \\  \\ \\  \\\\\\  \\|____|\\  \\   \\ \\  \\ \\ \\  \\____\\ \\  \\____\\ \\  \\ 
   \\ \\__\\\\ \\__\\ \\_______\\____\\_\\  \\   \\ \\__\\ \\ \\_______\\ \\_______\\ \\__\\
    \\|__| \\|__|\\|_______|\\_________\\   \\|__|  \\|_______|\\|_______|\\|__|
                        \\|_________|                                                                  
`

const handleInfo = async () => {
    console.info(chalk.blueBright(BANNER))
    console.info(chalk.green('[Nost CLI]'));
    console.info(
        'Nost CLI Version :',
        chalk.blue(
            JSON.parse(readFileSync(join(__dirname, '../package.json')).toString())
                .version,
        ),
        '\n',
    );
}

module.exports = handleInfo