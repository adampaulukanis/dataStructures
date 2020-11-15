# Hello

I found these data structures somewhere on the web. Sorry about no-credit for them.
Hope the original author(s) do not mind much if I use it for myself ;-)

## Why

I want to learn JavaScript and technics to write good code.

## What data structures I have:

- Node
- Queue
- Priority Queue
- Stack
- Tree
- SinglyList
- DoublyList

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

## Is my Node.JS up to date?

[Does your node support private class members?](https://node.green/#ESNEXT-candidate--stage-3--instance-class-fields-private-instance-class-fields-initializers)

```
$ node -v
v10.16.0
$ brew update
$ brew install node
Warning: node 14.1.0 is already installed, it's just not linked
You can use `brew link node` to link this version.
$ brew link node
Linking /usr/local/Cellar/node/14.1.0... 
Error: Could not symlink bin/node
Target /usr/local/bin/node
already exists. You may want to remove it:
  rm '/usr/local/bin/node'

To force the link and overwrite all conflicting files:
  brew link --overwrite node

To list all files that would be deleted:
  brew link --overwrite --dry-run node
$ brew link --overwrite node
Linking /usr/local/Cellar/node/14.1.0... 453 symlinks created
$ node -v
v14.1.0
```

### SinglyList members
`size, isEmpty(), toString(), insert(data), insert(pos, data), searchAt(pos), removeAt(pos)`
