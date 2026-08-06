import axios from 'axios'

// const API_URL = import.meta.env.VITE_API_URL || 'https://localhost:63169/api'

//const API_URL = import.meta.env.VITE_API_URL || 'https://shanmugamportfolio.runasp.net/api'


const API_URL =
  window.location.hostname === "localhost"
    ? "https://localhost:7199/api"
    : "https://shanmugamportfolio.runasp.net/api";

const api = axios.create({
  baseURL: API_URL,
});

//const api = axios.create({ baseURL: API_URL })

// Single call -> { summary, experience, skills, projects }
export const getPortfolio = async () => {
  const { data } = await api.get('/portfolio')
  return data
}

// Direct download link for the resume PDF served by the backend
export const resumeDownloadUrl = `${API_URL}/portfolio/resume`
