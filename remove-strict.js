const fs = require('fs');
const Jimp = require('jimp');

async function convert() {
    const imagePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a90faa92-8039-438e-99c1-a16164078dda\\omnitech_forage_balanced_vector_1771784119134.png';
    const outPath = 'd:\\Digital Marketing\\src\\app\\images\\logoUniversal-v6.png';

    if (!fs.existsSync('d:\\Digital Marketing\\src\\app\\images')) {
        fs.mkdirSync('d:\\Digital Marketing\\src\\app\\images', { recursive: true });
    }

    console.log("Reading balanced vector image...");
    const image = await Jimp.read(imagePath);
    console.log("Applying strict mathematical white removal...");

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];

        // Luminance and "whiteness" check
        let minRGB = Math.min(r, g, b);
        let maxRGB = Math.max(r, g, b);

        // If the pixel is very close to white
        if (minRGB > 240) {
            // Pure or almost pure white background -> perfectly transparent
            this.bitmap.data[idx + 3] = 0;
        } else if (minRGB > 150 && (maxRGB - minRGB) < 40) {
            // Anti-aliased white edge pixels (lighter grey/whiteish but not pure)
            // We set their alpha based on how dark they are (darker = more opaque)
            let darkness = 255 - maxRGB;
            // Make the alpha proportional to darkness. 
            this.bitmap.data[idx + 3] = Math.min(255, Math.floor(darkness * 2.5));

            // CRITICAL FIX: To prevent white halos on a black background, 
            // we forcefully color these edge pixels entirely to Teal/Emerald (e.g., r:0, g:170, b:170)
            // so they only act as a transparent colored edge, never a transparent white edge!
            this.bitmap.data[idx + 0] = Math.floor(r * 0.4);
            this.bitmap.data[idx + 1] = Math.max(r, g);
            this.bitmap.data[idx + 2] = Math.max(r, b);
        } else {
            // Core logo color (vibrant teal/emerald) -> perfectly opaque
            this.bitmap.data[idx + 3] = 255;
        }
    });

    console.log("Saving transparent clean image...");
    await image.writeAsync(outPath);
    console.log("Converted balanced vector logo successfully.");
}

convert().catch(console.error);
