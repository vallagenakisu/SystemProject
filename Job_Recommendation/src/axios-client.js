import axios from "axios";
const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
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