const API_KEY = '0ITl9buWOZ899pMqfQkfiK0VrEGZJVGxw3RFVOPs'
const API_URL = 'https://api.nasa.gov/planetary/apod'

export default async (urlParams?: string) => {
    try{
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${urlParams?.length ? urlParams : ''}`)
        const data = await response.json()

        return Promise.resolve(data)
    }catch(error){
        Promise.reject(error)
    }
}