const fs = require('fs');
const Jimp = require('jimp');

async function convert() {
    const imagePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a90faa92-8039-438e-99c1-a16164078dda\\omnitech_forage_final_1771783778542.png';
    const outPath = 'd:\\Digital Marketing\\src\\app\\images\\logoUniversal-v4.png';

    if (!fs.existsSync('d:\\Digital Marketing\\src\\app\\images')) {
        fs.mkdirSync('d:\\Digital Marketing\\src\\app\\images', { recursive: true });
    }

    console.log("Reading final universal image...");
    const image = await Jimp.read(imagePath);
    console.log("Applying Unmultiply-Black Alpha Processing...");

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];

        // Find brightest channel (max luminance)
        let max = Math.max(r, g, b);

        if (max === 0) {
            // Pure black -> totally transparent
            this.bitmap.data[idx + 0] = 0;
            this.bitmap.data[idx + 1] = 0;
            this.bitmap.data[idx + 2] = 0;
            this.bitmap.data[idx + 3] = 0;
        } else {
            // "Un-multiply" the black background by extracting true color + alpha.
            // This is the mathematically perfect way to extract a luminous layer composite!
            let alpha = max / 255.0;

            // Because we want the text (which might not be 100% white) to still look solid, 
            // we boost the alpha slightly via a gamma curve so vivid green isn't overly transparent.
            let unmultipliedR = r / alpha;
            let unmultipliedG = g / alpha;
            let unmultipliedB = b / alpha;

            let boostedAlpha = Math.pow(alpha, 0.45); // Standard gamma correction

            this.bitmap.data[idx + 0] = Math.min(255, Math.floor(unmultipliedR));
            this.bitmap.data[idx + 1] = Math.min(255, Math.floor(unmultipliedG));
            this.bitmap.data[idx + 2] = Math.min(255, Math.floor(unmultipliedB));
            this.bitmap.data[idx + 3] = Math.floor(Math.min(1, boostedAlpha) * 255);
        }
    });

    console.log("Saving mathematically perfect universal image...");
    await image.writeAsync(outPath);
    console.log("Converted perfect final logo successfully.");
}

convert().catch(console.error);
