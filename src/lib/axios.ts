import axios from "axios";

const api = {
    offert: async (formData: {fullName: string, email: string, phoneNumber: string, order: string}) => {
        const { data } = await axios.post('/api/offert', formData);
        return data;
    }
}

export default api;