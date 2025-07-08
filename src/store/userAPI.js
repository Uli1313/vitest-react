export const userAPI = {
  async fetchUser() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    const user = data.results[0]
    const name = `${user.name.first} ${user.name.last}`
    return { data: name }
  },
}
