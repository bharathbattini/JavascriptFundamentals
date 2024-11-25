const tesseract = require("node-tesseract-ocr")

const img = "https://www.karvykra.com/KYC_Validation/CaptchaImage.axd?guid=7b94a44e-7681-49ba-866d-2496ec5cccf3"

tesseract
    .recognize(img, config)
    .then((text) => {
        console.log("Result:", text)
    })
    .catch((error) => {
        console.log(error.message)
    });
