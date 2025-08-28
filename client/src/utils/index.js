import { surpriseMePrompts } from './../constants';
import FileSaver from 'file-saver';
import { logopi } from '../assets';

export function getRandomPrompts(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt =  surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompts(prompt);

    return randomPrompt;
}

// Function to add watermark to image
export const addWatermark = async (imageDataUrl, watermarkOptions = {}) => {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const image = new Image();
      const watermark = new Image();
      
      // Default watermark options
      const options = {
        position: 'bottom-right', // bottom-right, bottom-left, top-right, top-left
        opacity: 0.7,
        scale: 0.1, // 10% of image width
        margin: 20,
        ...watermarkOptions
      };
      
      image.crossOrigin = 'anonymous';
      watermark.crossOrigin = 'anonymous';
      
      let imagesLoaded = 0;
      const checkAllLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === 2) {
          // Set canvas size to match original image
          canvas.width = image.width;
          canvas.height = image.height;
          
          // Draw original image
          ctx.drawImage(image, 0, 0);
          
          // Calculate watermark size and position
          const watermarkWidth = image.width * options.scale;
          const watermarkHeight = (watermark.height / watermark.width) * watermarkWidth;
          
          let x, y;
          switch (options.position) {
            case 'bottom-right':
              x = image.width - watermarkWidth - options.margin;
              y = image.height - watermarkHeight - options.margin;
              break;
            case 'bottom-left':
              x = options.margin;
              y = image.height - watermarkHeight - options.margin;
              break;
            case 'top-right':
              x = image.width - watermarkWidth - options.margin;
              y = options.margin;
              break;
            case 'top-left':
              x = options.margin;
              y = options.margin;
              break;
            default:
              x = image.width - watermarkWidth - options.margin;
              y = image.height - watermarkHeight - options.margin;
          }
          
          // Set opacity and draw watermark
          ctx.globalAlpha = options.opacity;
          ctx.drawImage(watermark, x, y, watermarkWidth, watermarkHeight);
          
          // Reset opacity
          ctx.globalAlpha = 1.0;
          
          // Convert to data URL
          const watermarkedImageUrl = canvas.toDataURL('image/png', 0.9);
          resolve(watermarkedImageUrl);
        }
      };
      
      image.onload = checkAllLoaded;
      watermark.onload = checkAllLoaded;
      
      image.onerror = () => reject(new Error('Failed to load main image'));
      watermark.onerror = () => reject(new Error('Failed to load watermark'));
      
      // Load images
      image.src = imageDataUrl;
      watermark.src = logopi; // Using your logo
      
    } catch (error) {
      reject(error);
    }
  });
};

export async function downloadImage(_id, image) {
    FileSaver.saveAs(image, `chitrakaar-art-${_id}.jpg`);
}
