## Expo Image Cache Testing

The objective of this repository is to demonstrate that `expo-image` (SDWeb/Glide) does not respect the `Expires` header as documented [here](https://github.com/SDWebImage/SDWebImage/issues/1305#issuecomment-361471961)

### Installation

`yarn`

### Steps to Reproduce

#### Run Server

1. In a separate terminal, run `node server.js`

#### Run Client

1. In a separate terminal, run `yarn start`
2. Press `i` in terminal for iOS Expo Go

#### Observe

1. Observe the image when the application loads is the original `image.jpg` found in the root directory.
2. Press the `Check Cache` button and check the console for the path to the cached image.
3. After 30 seconds has expired (the default expiry inside of `server.js`), kill the web server (cmd+c).
4. Rename the image files

```bash
mv image.jpg image1.jpg
mv image2.jpg image.jpg
```

5. Restart the web server via `node server.js`
6. In the metro terminal, press `r` to reload the application, _note that the image does not change._
7. Press the `Clear Cache` button and reload the application, _note that the image now changes._
