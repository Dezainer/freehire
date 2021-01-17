const KEY = 'islands'

const testIsland = id => (
  new Promise((resolve, reject) => {
    const islands = get()
    islands[id] = true

    set(islands)
    setTimeout(resolve, 1000)
  })
)

const get = () => {
  return JSON.parse(localStorage.getItem(KEY)) || {}
}

const set = islands => {
  localStorage.setItem(KEY, JSON.stringify(islands))
}

export default { testIsland, get }
