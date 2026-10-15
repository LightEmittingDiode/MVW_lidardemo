# Velodyne LiDAR Sequence Player

Static interactive Plotly viewer for 4,117 LiDAR frames and pretrained PointPillars detections. No server-side Python or GPU is required for playback.

## GitHub Pages deployment

1. Create an empty GitHub repository and push this directory to its `main` branch.
2. Open repository Settings → Pages → Build and deployment → Source → GitHub Actions.
3. Run the Deploy LiDAR Player to GitHub Pages workflow, or push a commit.
4. Open the Pages URL reported in the deployment.

The `site/` directory contains only the website and the processed data. Source measurements, inference weights and the large distribution ZIP are excluded. The website is public: processed point clouds, capture timestamps and predictions can be downloaded by visitors.

All 4,117 gzip frames are kept at their original processed point counts. Frames are fetched on demand; the entire dataset is not downloaded on page load. Noto Sans, Plotly and data are bundled locally. Uploaded gzip files are decompressed by the browser using DecompressionStream. Recent Chrome/Edge recommended.

## Interpretation

X forward, Y left, Z up. PointPillars boxes use bottom Z and clockwise yaw. Detections are per-frame model predictions, not tracking IDs or ground truth. Width search uses 3–20 m first, then 20–80 m. Estimates require observed ground and obstacle boundaries; unavailable means insufficient supported measurement, not proof that a physical passage does not exist. Widths do not certify continuous drivability.

## Attribution

PointPillars: zhulf0804/PointPillars, MIT (site/POINTPILLARS_LICENSE.txt). Noto Sans: Google Fonts, OFL (site/fonts/OFL.txt). Plotly.js carries its MIT license in the bundled file header. The repository owner is responsible for permission to publish the supplied measurements.
