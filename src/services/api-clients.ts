import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5e511ecb5bcf435b99a4e026337e21f9",
  },
})
