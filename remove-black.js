const fs = require('fs');
const Jimp = require('jimp');

async function convert() {
  const imagePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a90faa92-8039-438e-99c1-a16164078dda\\omnitech_forage_dark_1771782572181.png';
  const outPath = 'd:\\Digital Marketing\\src\\app\\images\\logoDark.png';

  if (!fs.existsSync('d:\\Digital Marketing\\src\\app\\images')) {
    fs.mkdirSync('d:\\Digital Marketing\\src\\app\\images', { recursive: true });
  }

  console.log("Reading image...");
  const image = await Jimp.read(imagePath);
  console.log("Processing pixels...");

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];

    // Calculate alpha based on the brightness (to keep glow intact)
    const maxVal = Math.max(r, g, b);
    const minVal = Math.min(r, g, b);
    const saturation = maxVal === 0 ? 0 : (maxVal - minVal) / maxVal;

    let a = 255;

    if (maxVal < 10 && saturation < 0.2) {
      // Pure black background -> transparent
      a = 0;
      this.bitmap.data[idx + 0] = 0;
      this.bitmap.data[idx + 1] = 0;
      this.bitmap.data[idx + 2] = 0;
    } else if (maxVal < 100 && saturation > 0.5) {
      // Dark but highly saturated -> probably edge of the glow
      a = maxVal * 2.5;
      if (a > 255) a = 255;
    } else if (maxVal < 40) {
      // General dark grey background -> fade out smoothly
      a = maxVal * 2;
    }

    this.bitmap.data[idx + 3] = a;
  });

  console.log("Saving image...");
  await image.writeAsync(outPath);
  console.log("Converted logo successfully.");
}

convert().catch(console.error);
