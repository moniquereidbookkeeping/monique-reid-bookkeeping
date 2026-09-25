const fs = require('fs');
const path = require('path');
const opentype = require('opentype.js');
const sharp = require('sharp');

const goldColor = '#D4AF37';
const navyColor = '#1A2E40';
const darkNavyColor = '#0F1E2C';
const whiteColor = '#FFFFFF';
const goldLight = '#F3D57A';

// Load font
const fontBuf = fs.readFileSync('/tmp/PlayfairDisplay-Bold.ttf');
const font = opentype.parse(fontBuf.buffer.slice(fontBuf.byteOffset, fontBuf.byteOffset + fontBuf.byteLength));

function getTrackedPath(text, fontSize, letterSpacing) {
  const glyphs = font.stringToGlyphs(text);
  const scale = (1 / font.unitsPerEm) * fontSize;
  let x = 0;
  const combinedPath = new opentype.Path();

  for (let i = 0; i < glyphs.length; i++) {
    const glyph = glyphs[i];
    if (glyph.unicode !== undefined) {
      const glyphPath = glyph.getPath(x, 0, fontSize);
      combinedPath.commands.push(...glyphPath.commands);
    }
    const kerning = i < glyphs.length - 1 ? font.getKerningValue(glyph, glyphs[i + 1]) : 0;
    x += (glyph.advanceWidth + kerning) * scale + letterSpacing;
  }
  return { path: combinedPath, width: x - letterSpacing };
}

// Ensure public directories exist
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const assetsDir = path.join(publicDir, 'assets', 'logos');
fs.mkdirSync(assetsDir, { recursive: true });

async function generateAssets() {
  console.log('Generating high-resolution logo PNGs...');

  // 1. HORIZONTAL LOGO - TRANSPARENT (Navy text for light backgrounds)
  {
    const titleTracked = getTrackedPath('MONIQUE REID', 54, 54 * 0.06);
    const subtitleTracked = getTrackedPath('BOOKKEEPING', 28, 28 * 0.24);

    const crestSize = 130;
    const gap = 38;
    const textBlockWidth = Math.max(titleTracked.width, subtitleTracked.width);
    const totalWidth = crestSize + gap + textBlockWidth + 40;
    const totalHeight = 160;

    const crestX = 20;
    const crestY = (totalHeight - crestSize) / 2;

    const textStartX = crestX + crestSize + gap;
    const titleX = textStartX + (textBlockWidth - titleTracked.width) / 2;
    const subtitleX = textStartX + (textBlockWidth - subtitleTracked.width) / 2;
    const titleY = totalHeight / 2 - 4;
    const subtitleY = totalHeight / 2 + 38;

    const titlePathData = titleTracked.path.toPathData();
    const subtitlePathData = subtitleTracked.path.toPathData();

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="${totalWidth * 2}" height="${totalHeight * 2}">
      <!-- Monogram Crest -->
      <g transform="translate(${crestX}, ${crestY})">
        <!-- Outer Box -->
        <rect x="0" y="0" width="${crestSize}" height="${crestSize}" rx="26" fill="${navyColor}" stroke="${goldColor}" stroke-width="4" />
        <!-- Inner Border Accent -->
        <rect x="6" y="6" width="${crestSize - 12}" height="${crestSize - 12}" rx="20" fill="none" stroke="${goldColor}" stroke-width="1.8" opacity="0.45" />
        
        <!-- Scaled Inner Monogram -->
        <g transform="translate(${crestSize * 0.11}, ${crestSize * 0.11}) scale(${crestSize * 0.0078})">
          <!-- Top Diamond -->
          <polygon points="50,10 56,19 50,28 44,19" fill="${goldColor}" />
          <!-- Letter M -->
          <path d="M25 76V34L45 62L65 34V76" stroke="${goldColor}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Letter R -->
          <path d="M50 34H68C76 34 81 40 81 48C81 56 75 62 67 62H53M65 62L79 76" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Baseline line -->
          <line x1="22" y1="82" x2="80" y2="82" stroke="${goldColor}" stroke-width="3" stroke-linecap="round" />
        </g>
      </g>

      <!-- Typography -->
      <g transform="translate(${titleX}, ${titleY})">
        <path d="${titlePathData}" fill="${navyColor}" />
      </g>
      <g transform="translate(${subtitleX}, ${subtitleY})">
        <path d="${subtitlePathData}" fill="${goldColor}" />
      </g>
    </svg>`;

    const pngBuffer = await sharp(Buffer.from(svg), { density: 300 }).png().toBuffer();
    fs.writeFileSync(path.join(publicDir, 'monique-reid-bookkeeping-logo.png'), pngBuffer);
    fs.writeFileSync(path.join(assetsDir, 'monique-reid-logo-primary.png'), pngBuffer);
    fs.writeFileSync(path.join(publicDir, 'logo.png'), pngBuffer);
    console.log('Saved: monique-reid-bookkeeping-logo.png');
  }

  // 2. HORIZONTAL LOGO - WHITE / LIGHT TEXT (Transparent background for dark surfaces)
  {
    const titleTracked = getTrackedPath('MONIQUE REID', 54, 54 * 0.06);
    const subtitleTracked = getTrackedPath('BOOKKEEPING', 28, 28 * 0.24);

    const crestSize = 130;
    const gap = 38;
    const textBlockWidth = Math.max(titleTracked.width, subtitleTracked.width);
    const totalWidth = crestSize + gap + textBlockWidth + 40;
    const totalHeight = 160;

    const crestX = 20;
    const crestY = (totalHeight - crestSize) / 2;

    const textStartX = crestX + crestSize + gap;
    const titleX = textStartX + (textBlockWidth - titleTracked.width) / 2;
    const subtitleX = textStartX + (textBlockWidth - subtitleTracked.width) / 2;
    const titleY = totalHeight / 2 - 4;
    const subtitleY = totalHeight / 2 + 38;

    const titlePathData = titleTracked.path.toPathData();
    const subtitlePathData = subtitleTracked.path.toPathData();

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="${totalWidth * 2}" height="${totalHeight * 2}">
      <!-- Monogram Crest -->
      <g transform="translate(${crestX}, ${crestY})">
        <rect x="0" y="0" width="${crestSize}" height="${crestSize}" rx="26" fill="${navyColor}" stroke="${goldColor}" stroke-width="4" />
        <rect x="6" y="6" width="${crestSize - 12}" height="${crestSize - 12}" rx="20" fill="none" stroke="${goldColor}" stroke-width="1.8" opacity="0.45" />
        
        <g transform="translate(${crestSize * 0.11}, ${crestSize * 0.11}) scale(${crestSize * 0.0078})">
          <polygon points="50,10 56,19 50,28 44,19" fill="${goldColor}" />
          <path d="M25 76V34L45 62L65 34V76" stroke="${goldColor}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M50 34H68C76 34 81 40 81 48C81 56 75 62 67 62H53M65 62L79 76" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <line x1="22" y1="82" x2="80" y2="82" stroke="${goldColor}" stroke-width="3" stroke-linecap="round" />
        </g>
      </g>

      <!-- Typography -->
      <g transform="translate(${titleX}, ${titleY})">
        <path d="${titlePathData}" fill="${whiteColor}" />
      </g>
      <g transform="translate(${subtitleX}, ${subtitleY})">
        <path d="${subtitlePathData}" fill="${goldLight}" />
      </g>
    </svg>`;

    const pngBuffer = await sharp(Buffer.from(svg), { density: 300 }).png().toBuffer();
    fs.writeFileSync(path.join(publicDir, 'monique-reid-bookkeeping-logo-white.png'), pngBuffer);
    fs.writeFileSync(path.join(assetsDir, 'monique-reid-logo-white.png'), pngBuffer);
    console.log('Saved: monique-reid-bookkeeping-logo-white.png');
  }

  // 3. HORIZONTAL LOGO WITH LUXURY NAVY BACKGROUND
  {
    const titleTracked = getTrackedPath('MONIQUE REID', 54, 54 * 0.06);
    const subtitleTracked = getTrackedPath('BOOKKEEPING', 28, 28 * 0.24);

    const crestSize = 130;
    const gap = 38;
    const textBlockWidth = Math.max(titleTracked.width, subtitleTracked.width);
    const totalWidth = crestSize + gap + textBlockWidth + 80;
    const totalHeight = 190;

    const crestX = 40;
    const crestY = (totalHeight - crestSize) / 2;

    const textStartX = crestX + crestSize + gap;
    const titleX = textStartX + (textBlockWidth - titleTracked.width) / 2;
    const subtitleX = textStartX + (textBlockWidth - subtitleTracked.width) / 2;
    const titleY = totalHeight / 2 - 4;
    const subtitleY = totalHeight / 2 + 38;

    const titlePathData = titleTracked.path.toPathData();
    const subtitlePathData = subtitleTracked.path.toPathData();

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="${totalWidth * 2}" height="${totalHeight * 2}">
      <!-- Navy Luxury Card Background -->
      <rect x="0" y="0" width="${totalWidth}" height="${totalHeight}" rx="24" fill="${navyColor}" stroke="${goldColor}" stroke-width="2" />
      <rect x="4" y="4" width="${totalWidth - 8}" height="${totalHeight - 8}" rx="20" fill="none" stroke="${goldColor}" stroke-width="1" opacity="0.25" />

      <!-- Monogram Crest -->
      <g transform="translate(${crestX}, ${crestY})">
        <rect x="0" y="0" width="${crestSize}" height="${crestSize}" rx="26" fill="${darkNavyColor}" stroke="${goldColor}" stroke-width="3" />
        <rect x="6" y="6" width="${crestSize - 12}" height="${crestSize - 12}" rx="20" fill="none" stroke="${goldColor}" stroke-width="1.5" opacity="0.4" />
        
        <g transform="translate(${crestSize * 0.11}, ${crestSize * 0.11}) scale(${crestSize * 0.0078})">
          <polygon points="50,10 56,19 50,28 44,19" fill="${goldColor}" />
          <path d="M25 76V34L45 62L65 34V76" stroke="${goldColor}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M50 34H68C76 34 81 40 81 48C81 56 75 62 67 62H53M65 62L79 76" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <line x1="22" y1="82" x2="80" y2="82" stroke="${goldColor}" stroke-width="3" stroke-linecap="round" />
        </g>
      </g>

      <!-- Typography -->
      <g transform="translate(${titleX}, ${titleY})">
        <path d="${titlePathData}" fill="${whiteColor}" />
      </g>
      <g transform="translate(${subtitleX}, ${subtitleY})">
        <path d="${subtitlePathData}" fill="${goldLight}" />
      </g>
    </svg>`;

    const pngBuffer = await sharp(Buffer.from(svg), { density: 300 }).png().toBuffer();
    fs.writeFileSync(path.join(publicDir, 'monique-reid-bookkeeping-logo-navy.png'), pngBuffer);
    fs.writeFileSync(path.join(assetsDir, 'monique-reid-logo-navy.png'), pngBuffer);
    console.log('Saved: monique-reid-bookkeeping-logo-navy.png');
  }

  // 4. ICON / MONOGRAM CREST ONLY (Square 1024x1024 High-Res PNG)
  {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="1024" height="1024">
      <g transform="translate(30, 30)">
        <!-- Outer Crest -->
        <rect x="0" y="0" width="440" height="440" rx="90" fill="${navyColor}" stroke="${goldColor}" stroke-width="14" />
        <!-- Inner Border Accent -->
        <rect x="22" y="22" width="396" height="396" rx="72" fill="none" stroke="${goldColor}" stroke-width="5" opacity="0.45" />

        <!-- Scaled Inner Monogram -->
        <g transform="translate(48, 48) scale(3.44)">
          <!-- Top Diamond -->
          <polygon points="50,10 56,19 50,28 44,19" fill="${goldColor}" />
          <!-- Letter M -->
          <path d="M25 76V34L45 62L65 34V76" stroke="${goldColor}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Letter R -->
          <path d="M50 34H68C76 34 81 40 81 48C81 56 75 62 67 62H53M65 62L79 76" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Baseline line -->
          <line x1="22" y1="82" x2="80" y2="82" stroke="${goldColor}" stroke-width="3" stroke-linecap="round" />
        </g>
      </g>
    </svg>`;

    const pngBuffer = await sharp(Buffer.from(svg), { density: 300 }).png().toBuffer();
    fs.writeFileSync(path.join(publicDir, 'monique-reid-icon.png'), pngBuffer);
    fs.writeFileSync(path.join(assetsDir, 'monique-reid-icon.png'), pngBuffer);
    console.log('Saved: monique-reid-icon.png');
  }

  // 5. STACKED / VERTICAL LOGO (Crest top, text centered below)
  {
    const titleTracked = getTrackedPath('MONIQUE REID', 48, 48 * 0.06);
    const subtitleTracked = getTrackedPath('BOOKKEEPING', 25, 25 * 0.24);

    const crestSize = 140;
    const totalWidth = 500;
    const totalHeight = 310;

    const crestX = (totalWidth - crestSize) / 2;
    const crestY = 24;

    const titleX = (totalWidth - titleTracked.width) / 2;
    const titleY = crestY + crestSize + 55;

    const subtitleX = (totalWidth - subtitleTracked.width) / 2;
    const subtitleY = titleY + 38;

    const titlePathData = titleTracked.path.toPathData();
    const subtitlePathData = subtitleTracked.path.toPathData();

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="1000" height="620">
      <!-- Monogram Crest -->
      <g transform="translate(${crestX}, ${crestY})">
        <rect x="0" y="0" width="${crestSize}" height="${crestSize}" rx="28" fill="${navyColor}" stroke="${goldColor}" stroke-width="4" />
        <rect x="6" y="6" width="${crestSize - 12}" height="${crestSize - 12}" rx="22" fill="none" stroke="${goldColor}" stroke-width="1.8" opacity="0.45" />

        <g transform="translate(${crestSize * 0.11}, ${crestSize * 0.11}) scale(${crestSize * 0.0078})">
          <polygon points="50,10 56,19 50,28 44,19" fill="${goldColor}" />
          <path d="M25 76V34L45 62L65 34V76" stroke="${goldColor}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M50 34H68C76 34 81 40 81 48C81 56 75 62 67 62H53M65 62L79 76" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
          <line x1="22" y1="82" x2="80" y2="82" stroke="${goldColor}" stroke-width="3" stroke-linecap="round" />
        </g>
      </g>

      <!-- Typography -->
      <g transform="translate(${titleX}, ${titleY})">
        <path d="${titlePathData}" fill="${navyColor}" />
      </g>
      <g transform="translate(${subtitleX}, ${subtitleY})">
        <path d="${subtitlePathData}" fill="${goldColor}" />
      </g>
    </svg>`;

    const pngBuffer = await sharp(Buffer.from(svg), { density: 300 }).png().toBuffer();
    fs.writeFileSync(path.join(publicDir, 'monique-reid-logo-stacked.png'), pngBuffer);
    fs.writeFileSync(path.join(assetsDir, 'monique-reid-logo-stacked.png'), pngBuffer);
    console.log('Saved: monique-reid-logo-stacked.png');
  }

  // Copy all assets to dist/ if dist exists
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    const distAssets = path.join(distDir, 'assets', 'logos');
    fs.mkdirSync(distAssets, { recursive: true });
    for (const f of fs.readdirSync(assetsDir)) {
      fs.copyFileSync(path.join(assetsDir, f), path.join(distAssets, f));
    }
    for (const f of [
      'monique-reid-bookkeeping-logo.png',
      'monique-reid-bookkeeping-logo-white.png',
      'monique-reid-bookkeeping-logo-navy.png',
      'monique-reid-icon.png',
      'monique-reid-logo-stacked.png',
      'logo.png',
    ]) {
      if (fs.existsSync(path.join(publicDir, f))) {
        fs.copyFileSync(path.join(publicDir, f), path.join(distDir, f));
      }
    }
  }

  console.log('All logo PNG assets successfully generated!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
