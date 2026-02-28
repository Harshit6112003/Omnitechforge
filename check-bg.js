const Jimp = require('jimp');

async function check() {
    const image = await Jimp.read('d:\\Digital Marketing\\src\\app\\images\\logo.jpg.png');
    const color1 = image.getPixelColor(1, 1);
    const color2 = image.getPixelColor(image.bitmap.width - 1, 1);
    const color3 = image.getPixelColor(1, image.bitmap.height - 1);
    console.log('Top Left Color:', Jimp.intToRGBA(color1));
    console.log('Top Right Color:', Jimp.intToRGBA(color2));
    console.log('Bottom Left Color:', Jimp.intToRGBA(color3));
}
check().catch(console.error);
