import axios from "axios";
const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",
    });

axiosClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use((response)=>{
    return response;
},(error)=>{    
    if(error.response.staatus === 401){
        localStorage.removeItem("token");
        window.location = "/login";
    }
    throw error;
});
export default axiosClient;