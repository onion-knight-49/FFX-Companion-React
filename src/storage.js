const key = 'ffx-arena'

export function load() {
  try {
    const raw = localStorage.getItem(key)
    return JSON.parse(raw)
  } catch (e) {
    return null
  }
}

export function save(data) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {}
}
