import prompt from 'prompt';
import mainPrompt from './prompt/prompt-main.js';
import chalk from 'chalk';
import createQRCode from './services/qr-code/create.js';


async function main(){

    prompt.get(mainPrompt, async (err, choose) => {

        if(choose.select == 1){
            await createQRCode();
        }

        if(choose.select == 2){
            console.log(chalk.orange("\nSenha escolhida\n"));
        }


    });


    prompt.start();

}

main();