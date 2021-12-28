export default function listGifts(letter) {
  // ¡Tú puedes!
  const listGift = {}
  letter
    .trim()
    .split(/\s* /gm)
    .filter((gift) => {
      return !gift.startsWith('_')
    })
    .forEach((item) => {
      listGift[item] = listGift[item] ? listGift[item] + 1 : 1
      return item
    })
  return listGift
}
