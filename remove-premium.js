const fs = require('fs');
const Jimp = require('jimp');

async function convert() {
    const imagePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a90faa92-8039-438e-99c1-a16164078dda\\omnitech_forage_premium_1771784327934.png';
    const outPath = 'd:\\Digital Marketing\\src\\app\\images\\logoUniversal-v7.png';

    if (!fs.existsSync('d:\\Digital Marketing\\src\\app\\images')) {
        fs.mkdirSync('d:\\Digital Marketing\\src\\app\\images', { recursive: true });
    }

    console.log("Reading masterpiece 3D logo...");
    const image = await Jimp.read(imagePath);
    console.log("Extracting pristine glow alpha...");

    const width = image.bitmap.width;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];

        // Unmultiply-Alpha Logic to flawlessly extract light from black
        let max = Math.max(r, g, b);

        if (max === 0) {
            this.bitmap.data[idx + 3] = 0;
        } else {
            let alpha = max / 255.0;

            let unmultipliedR = Math.min(255, r / alpha);
            let unmultipliedG = Math.min(255, g / alpha);
            let unmultipliedB = Math.min(255, b / alpha);

            // We want to keep the text (on the right) very solid, and only let the extreme glow be transparent
            let boostedAlpha;
            if (x > width * 0.3) {
                // Right side (TEXT): Use a massive gamma boost so the text body stays completely opaque!
                boostedAlpha = Math.pow(alpha, 0.2);
            } else {
                // Left side (ICON GLOW): Preserve the smooth transparent fade out of the sparks
                boostedAlpha = Math.pow(alpha, 0.45);
            }

            this.bitmap.data[idx + 0] = Math.floor(unmultipliedR);
            this.bitmap.data[idx + 1] = Math.floor(unmultipliedG);
            this.bitmap.data[idx + 2] = Math.floor(unmultipliedB);
            this.bitmap.data[idx + 3] = Math.floor(Math.min(1, boostedAlpha) * 255);
        }
    });

    console.log("Saving flawless premium transparent image...");
    await image.writeAsync(outPath);
    console.log("Converted properly.");
}

convert().catch(console.error);
