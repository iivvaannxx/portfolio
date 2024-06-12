#! /usr/bin/env bash

target=$1

curl "https://res.cloudinary.com/djvouqkjd/video/upload/q_auto:good,h_512,vc_av1/v1718186193/$target.mp4" -o preview-av1.mp4
curl "https://res.cloudinary.com/djvouqkjd/video/upload/q_auto:good,h_512,vc_av1/v1718186193/$target.webm" -o preview-av1.webm
curl "https://res.cloudinary.com/djvouqkjd/video/upload/q_auto:good,h_512,vc_vp9/v1718186193/$target.webm" -o preview-vp9.webm
curl "https://res.cloudinary.com/djvouqkjd/video/upload/q_auto:good,h_512,vc_h264:high/v1718186193/$target.mp4" -o preview-h264.mp4
curl "https://res.cloudinary.com/djvouqkjd/video/upload/q_auto:good,h_512,vc_h265/v1718186193/$target.mp4" -o preview-h265.mp4

mv "./preview-av1.mp4" "./source/sections/projects/assets/$target/preview-av1.mp4"
mv "./preview-av1.webm" "./source/sections/projects/assets/$target/preview-av1.webm"
mv "./preview-vp9.webm" "./source/sections/projects/assets/$target/preview-vp9.webm"
mv "./preview-h264.mp4" "./source/sections/projects/assets/$target/preview-h264.mp4"
mv "./preview-h265.mp4" "./source/sections/projects/assets/$target/preview-h265.mp4"
