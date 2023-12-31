# Nostr future event maker/publisher

## Preparation

```sh
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install
npm i

nvim config/nsec.txt # Input nsec1...
chmod 600 config/nsec.txt

nvim config/relays.txt # Input relay URLs
# Example
<<EOF
wss://nostr.example.com
wss://another-relay.example.com
# wss://invalid-relay.example.com
# The line starting with # is ignored.
wss://third-relay.example.com
EOF
```

## Usage

Edit `sign.js` and run it `node sign.js`.

Copy the result of `sign.js` and edit `verify.js` by pasting it and run it `node verify.js` to verify the event.

Paste the result of `sign.js` to `publish.js` and run it `node publish.js`.
