import prompt from "prompt";
import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR code"),
    },

    {
        name:"type",
        description: chalk.yellow(
            "Escolha o tipo de QR Code: [1] - Normal  [2] - Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
];

export default promptQRCode;