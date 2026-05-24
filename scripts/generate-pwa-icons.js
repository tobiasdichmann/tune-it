const { Jimp } = require('jimp');
const path = require('path');

async function generate() {
  try {
    const srcPath = path.join(__dirname, '../src/assets/img/logo/logo_bg-grey_transparent.png');
    console.log('Reading source logo from:', srcPath);
    const logo = await Jimp.read(srcPath);
    
    // Autocrop transparent borders
    logo.autocrop();
    console.log('Cropped logo dimensions:', logo.width, 'x', logo.height);
    
    const sizes = [512, 192];
    
    for (const size of sizes) {
      console.log(`Generating logo${size}.png...`);
      
      // Create a background of solid navy (#13222f)
      const bg = new Jimp({
        width: size,
        height: size,
        color: 0x13222fff // 0xRRGGBBAA
      });
      
      // Resize the logo to fit within the square (e.g. 75% of the size)
      const maxLogoDim = Math.round(size * 0.75);
      const tempLogo = logo.clone();
      
      // Scale down while maintaining aspect ratio
      if (tempLogo.width > tempLogo.height) {
        tempLogo.resize({ w: maxLogoDim });
      } else {
        tempLogo.resize({ h: maxLogoDim });
      }
      
      // Calculate centering offsets
      const x = Math.round((size - tempLogo.width) / 2);
      const y = Math.round((size - tempLogo.height) / 2);
      
      // Composite logo onto background
      bg.composite(tempLogo, x, y);
      
      // Write file
      const destPath = path.join(__dirname, `../public/logo${size}.png`);
      await bg.write(destPath);
      console.log(`Successfully wrote ${destPath}`);
    }
    console.log('All icons generated successfully!');
  } catch (err) {
    console.error('Error generating icons:', err);
    process.exit(1);
  }
}

generate();
