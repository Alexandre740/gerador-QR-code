import prompt from "prompt";
import promptQRCode from "../../src/prompt/prompt-qrcode";

async function createQRCode(){
    prompt.get(promptQRCode, (err, result) => {});
}

export default createQRCode;