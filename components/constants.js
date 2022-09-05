const chars = {
  symbols: "!@#$%^&*()/",
  lowercaseletters: "abcdefghijklmnopqrstuvwxyz",
  uppercaseletters: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
  numbers: "1234567890"
}

export default function getRandomCharset() {
  return {
    s: chars.symbols[Math.floor(Math.random() * chars.symbols.length)],
    l: chars.lowercaseletters[Math.floor(Math.random() * chars.lowercaseletters.length)],
    u: chars.uppercaseletters[Math.floor(Math.random() * chars.uppercaseletters.length)],
    n: chars.numbers[Math.floor(Math.random() * chars.numbers.length)]
  }
}