import chalk from 'chalk';

const mainPrompt = [
    {
        name:"select",
        description: chalk.green.bold("\nEscolha: [1] - QR Code  [2] - Senha: "),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("\nEscolha apenas entre 1 e 2\n"),
        required: true,
    },
];

export default mainPrompt;