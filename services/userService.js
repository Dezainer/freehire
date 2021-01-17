const KEY = 'user'

const create = data => (
  new Promise((resolve, reject) => {
    localStorage.setItem(KEY, JSON.stringify(data))
    setTimeout(resolve, 2000)
  })
)

const get = () => (
  JSON.parse(localStorage.getItem(KEY))
)

export default { create, get }
