const fs = require('fs');
const Jimp = require('jimp');

async function convert() {
    const imagePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a90faa92-8039-438e-99c1-a16164078dda\\omnitech_forage_light_1771782601665.png';
    const outPath = 'd:\\Digital Marketing\\src\\app\\images\\logoLight.png';

    if (!fs.existsSync('d:\\Digital Marketing\\src\\app\\images')) {
        fs.mkdirSync('d:\\Digital Marketing\\src\\app\\images', { recursive: true });
    }

    console.log("Reading Light Mode image...");
    const image = await Jimp.read(imagePath);
    console.log("Processing pixels for white removal...");

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];

        // Check how close the pixel is to pure white
        if (r > 240 && g > 240 && b > 240) {
            // Pure or very near white background -> transparent
            this.bitmap.data[idx + 3] = 0;
        } else if (r > 220 && g > 220 && b > 220) {
            // Anti-aliased edges of white
            this.bitmap.data[idx + 3] = Math.max(0, 255 - (r + g + b - 660) * 1.5);
        }
    });

    console.log("Saving Light image...");
    await image.writeAsync(outPath);
    console.log("Converted Light logo successfully.");
}

convert().catch(console.error);
