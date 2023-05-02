const wallPaper = document.querySelector(".wallpaper");
const inputWidth = document.querySelector(".input-width");
const inputHeight = document.querySelector(".input-height");
const inputLinearStartColor = document.querySelector(
  ".input-linear-start-color"
);
const inputLinearEndColor = document.querySelector(".input-linear-end-color");
const inputRadialColor = document.querySelector(".input-radial-color");
const btnGenerate = document.querySelector(".btn-generate-wallpaper");

btnGenerate.addEventListener("click", renderWallpaperFormInput);
renderWallpaperFormInput();

function renderWallpaperFormInput() {
  wallPaper.width = inputWidth.value;
  wallPaper.height = inputHeight.value;

  renderWallPaper(
    wallPaper,
    inputLinearStartColor.value,
    inputLinearEndColor.value,
    inputRadialColor.value
  );
}

/**
 *
 * @param {HTMLCanvasElement} canvasElem
 * @param {string} linearStartColor
 * @param {string} linearEndColor
 * @param {string} radialColor
 */

function renderWallPaper(
  canvasElem,
  linearStartColor,
  linearEndColor,
  radialColor
) {
  const ctx = canvasElem.getContext("2d");
  const width = canvasElem.width;
  const height = canvasElem.height;
  const linearGradient = buildLinearGradient(ctx, width, height);
  const radialGradient = buildRidialGradient(ctx, width, height);

  linearGradient.addColorStop(0, linearStartColor);
  linearGradient.addColorStop(1, linearEndColor);

  radialGradient.addColorStop(0, radialColor);
  radialGradient.addColorStop(1, "transparent");

  ctx.fillStyle = linearGradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = radialGradient;
  ctx.fillRect(0, 0, width, height);
}

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} width
 * @param {number} height
 */
function buildLinearGradient(ctx, width, height) {
  return ctx.createLinearGradient(0, 0, width, height);
}

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} width
 * @param {number} height
 */
function buildRidialGradient(ctx, width, height) {
  const x = getRandomNumber(width * 0.75, width);
  const y = getRandomNumber(height * 0.25, height * 0.75);
  const size = width / 2;

  return ctx.createRadialGradient(x, y, 0, x, y, size);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

renderWallPaper(wallPaper, "#ff841f", "#ffd814", "#b973f2");
