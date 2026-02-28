const fs = require('fs');
const Jimp = require('jimp');

async function convert() {
    const imagePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a90faa92-8039-438e-99c1-a16164078dda\\omnitech_forage_absolute_final_1771784431444.png';
    const outPath = 'd:\\Digital Marketing\\src\\app\\images\\logoUniversal-v8.png';

    if (!fs.existsSync('d:\\Digital Marketing\\src\\app\\images')) {
        fs.mkdirSync('d:\\Digital Marketing\\src\\app\\images', { recursive: true });
    }

    console.log("Reading flat white vector image...");
    const image = await Jimp.read(imagePath);
    console.log("Applying pure white-key alpha extraction...");

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];

        // Invert luminance (darkness is opacity, whiteness is transparency)
        // We base it roughly on luminance to find "how white" a pixel is
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        if (lum > 245) {
            // Pure white = 100% transparent. No halos possible.
            this.bitmap.data[idx + 3] = 0;
        } else {
            // Unmultiply White procedure to flawlessly recover the underlying dark ink without chalky borders!
            // This is the opposite of unmultiply-black.
            // 1 - Alpha = (Luminance of pixel) / 255.
            let alpha = 1.0 - (lum / 255.0);

            // We want to force the teal color deeply into the semi-transparent pixels
            // so that they never render as "greyish white" on dark backgrounds.
            // We find what the pure underlying ink color likely is by doing (pixelColor - (1 - alpha) * 255) / alpha

            let trueR = (r - ((1 - alpha) * 255)) / alpha;
            let trueG = (g - ((1 - alpha) * 255)) / alpha;
            let trueB = (b - ((1 - alpha) * 255)) / alpha;

            // Enforce limits and slightly boost the opacity of anti-aliased edge pixels so text stays thick
            this.bitmap.data[idx + 0] = Math.max(0, Math.min(255, Math.floor(trueR)));
            this.bitmap.data[idx + 1] = Math.max(0, Math.min(255, Math.floor(trueG)));
            this.bitmap.data[idx + 2] = Math.max(0, Math.min(255, Math.floor(trueB)));

            let boostedAlpha = Math.pow(alpha, 0.4); // Standardize the stroke thickness
            this.bitmap.data[idx + 3] = Math.floor(Math.min(1, boostedAlpha) * 255);
        }
    });

    console.log("Saving perfectly clean vector logo...");
    await image.writeAsync(outPath);
    console.log("Converted properly.");
}

convert().catch(console.error);
