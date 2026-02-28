const fs = require('fs');
const Jimp = require('jimp');

async function convert() {
    const imagePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a90faa92-8039-438e-99c1-a16164078dda\\omnitech_forage_spatial_1771783421039.png';
    const outPath = 'd:\\Digital Marketing\\src\\app\\images\\logoUniversal-v3.png';

    if (!fs.existsSync('d:\\Digital Marketing\\src\\app\\images')) {
        fs.mkdirSync('d:\\Digital Marketing\\src\\app\\images', { recursive: true });
    }

    console.log("Reading spatial universal image...");
    const image = await Jimp.read(imagePath);
    console.log("Applying spatial processing...");

    const width = image.bitmap.width;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];

        // Luminance formula
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        let alpha = 255;

        // SPATIAL AWARENESS: Is this pixel on the left (icon/glow) or right (text)?
        if (x < width * 0.38) {
            // Left side: Glow preservation mode
            if (lum < 5) {
                alpha = 0;
            } else if (lum < 50) {
                alpha = Math.floor(lum * 2);
                r = Math.min(255, Math.floor(r * 2.5));
                g = Math.min(255, Math.floor(g * 2.5));
                b = Math.min(255, Math.floor(b * 2.5));
            } else if (lum < 100) {
                alpha = Math.floor(100 + (lum - 50) * 3);
                if (alpha > 255) alpha = 255;
            }
        } else {
            // Right side: Solid text preservation mode
            if (lum < 10) {
                // Pure black background -> transparent
                alpha = 0;
            } else if (lum < 35) {
                // Anti-aliasing edge softening so text doesn't look jagged
                alpha = Math.floor((lum - 10) * 10.2); // 0 to 255 
            } else {
                // The text itself remains 100% perfectly solid and opaque!
                alpha = 255;
            }
        }

        this.bitmap.data[idx + 0] = r;
        this.bitmap.data[idx + 1] = g;
        this.bitmap.data[idx + 2] = b;
        this.bitmap.data[idx + 3] = alpha;
    });

    console.log("Saving universal image...");
    await image.writeAsync(outPath);
    console.log("Converted universal logo successfully.");
}

convert().catch(console.error);
