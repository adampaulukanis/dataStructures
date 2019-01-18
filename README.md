# Hello

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

I found these data structures somewhere on the web. Sorry about no-credit for them.
Hope the original author(s) do not mind much if I use it for myself ;-)

## Why

I want to learn JavaScript and technics to write good code. Plus get used to use *standard*.

## What data structures I have:

- Tree
- Queue
- Singly-Linked List
- Doubly-Linked List

## How to use it

```sh
git clone https://github.com/adam17/dataStructures
touch index.js
echo "'use strict'
const dataStructures = require('./dataStructures/')
const Queue = dataStructures.Queue
let q = new Queue()
q.enqueue(1)
console.log(q)" >> index.js
node index.js
```
