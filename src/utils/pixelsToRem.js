const pixelsToRem = (pixels, options = {base: 16}) => {
  pixels = parseFloat(pixels.toString().replace('px', '').trim());
  if(pixels === 0) {
    return 0;
  }
  return pixels / options.base + 'rem';
};

module.exports = pixelsToRem;
