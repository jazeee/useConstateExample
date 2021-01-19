# Example of using constate

TL;DR: You can wrap your hooks with a context provider using a one-liner constate (including strong typing support).

## CircleCI Status

[![<CircleCI>](https://circleci.com/gh/jazeee/useConstateExample.svg?style=svg)](https://app.circleci.com/pipelines/github/jazeee/useConstateExample)

## Summary

In React, we sometimes want to share state across a sub-tree in our app.

[React Context provider](https://reactjs.org/docs/context.html) is useful, but often generates a fair bit of boilerplate.

`constate` [package](https://github.com/diegohaz/constate) makes this much simpler. See example [code](./src/Incrementer/state/)

## Using

* `yarn start`
* `yarn test`

