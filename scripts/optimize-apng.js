#!/usr/bin/env node

import sharp from "sharp";
import apng from "sharp-apng";
import fs from "fs/promises";

const DIR_PATH = "./public/images/weather";

(async () => {
  const files = await fs.readdir(DIR_PATH);

  for (const file of files) {
    if (file.endsWith(".webp")) {
      continue;
    }

    const path = `${DIR_PATH}/${file}`;
    const sharp = await apng.sharpFromApng(path, {
      transparent: true,
    });

    const newPath = path.replace(".png", ".webp");
    sharp
      .webp({
        quality: 100,
        lossless: true,
      })
      .toFile(newPath);
  }
})();
