# SimpleTimer for JavaScript
![npm](https://img.shields.io/npm/v/simple-timer-js)

A simple timer to show timer countdown on websites.

## Installation
### <img src="https://avatars1.githubusercontent.com/u/22247014?s=200&v=4" width="20" height="20"> Yarn
```bash
$ yarn add simple-timer-js
```

### <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" width="20" height="20"> NPM
```bash
$ npm install simple-timer-js
```

## Usage
1. Require the `SimpleTimer`
    ```javascript
    var SimpleTimer = require("simple-timer-js");
    ````

1. Create a new SimpleTimer instance with the expected `duration`, `timerContainer`, `originalText`.
    ```javascript
    var timerDurationInSeconds = 60;
    var uniqueTimerContainerClassName = "timer-container";
    var originalTextInContainer = "";
    var timer = new SimpleTimer(timerDurationInSeconds, uniqueTimerContainerClassName, originalTextInContainer);
    ```

1. Call `startTimer()` to start the timer.
    ```javascript
    timer.startTimer();
    ```

1. If you want to force end the timer, simply call `endTimer()`. Otherwise, the timer will stop on its own, after it reaches the given `timerDuration`.
    ```javascript
    timer.endTimer();
    ```

## Contributing
We'd love to accept your patches and contributions to this project! Checkout [contributing](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md) to learn more.

## License
Refer to the license file.
