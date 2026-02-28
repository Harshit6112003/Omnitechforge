const fs = require('fs');
const Jimp = require('jimp');

async function convert() {
    const imagePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a90faa92-8039-438e-99c1-a16164078dda\\omnitech_forage_vector_1771783927706.png';
    const outPath = 'd:\\Digital Marketing\\src\\app\\images\\logoUniversal-v5.png';

    if (!fs.existsSync('d:\\Digital Marketing\\src\\app\\images')) {
        fs.mkdirSync('d:\\Digital Marketing\\src\\app\\images', { recursive: true });
    }

    console.log("Reading flat vector image...");
    const image = await Jimp.read(imagePath);
    console.log("Applying strict white removal...");

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];

        // Check how close to white
        if (r > 240 && g > 240 && b > 240) {
            this.bitmap.data[idx + 3] = 0; // Completely transparent
        } else if (r > 200 && g > 200 && b > 200) {
            // Anti-aliasing edges - make them partially transparent
            let dist = 255 - ((r + g + b) / 3);
            this.bitmap.data[idx + 3] = Math.floor(dist * 4.6);
            // Darken the brightened edge slightly so it doesn't look white on dark background
            this.bitmap.data[idx + 0] = Math.floor(r * 0.8);
            this.bitmap.data[idx + 1] = Math.floor(g * 0.8);
            this.bitmap.data[idx + 2] = Math.floor(b * 0.8);
        } else {
            // Core color - completely opaque
            this.bitmap.data[idx + 3] = 255;
        }
    });

    console.log("Saving flat transparent image...");
    await image.writeAsync(outPath);
    console.log("Converted successfully.");
}

convert().catch(console.error);
