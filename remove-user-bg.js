const fs = require('fs');
const Jimp = require('jimp');

async function convert() {
    const imagePath = 'd:\\Digital Marketing\\src\\app\\images\\logo.jpg.png';
    const outPath = 'd:\\Digital Marketing\\src\\app\\images\\logo-transparent.png';

    console.log("Reading user logo...");
    const image = await Jimp.read(imagePath);
    console.log("Removing dark background...");

    // Find background color roughly
    const bgR = 3;
    const bgG = 6;
    const bgB = 11;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];

        // Distance from the background color
        let dist = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);

        if (dist < 15) {
            // Very close to background - make fully transparent
            this.bitmap.data[idx + 3] = 0;
        } else if (dist < 60) {
            // Edge pixel - make semi-transparent
            let alpha = Math.floor(((dist - 15) / 45) * 255);
            this.bitmap.data[idx + 3] = alpha;
        }
    });

    console.log("Saving transparent logo...");
    await image.writeAsync(outPath);
    console.log("Done.");
}

convert().catch(console.error);
