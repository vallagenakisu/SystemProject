import axios from "axios";
const axiosClient = axios.create({
    baseURL: "https://api.trackprogress.xyz/api",
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
    if(error.response.status === 401){
        localStorage.removeItem("token");
        window.location = "/login";
    }
    throw error;
});
export default axiosClient;