import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3010',
});

export const ContactAPI = {
    contactForm (contactForm: ContactFormType) {
        return instance.post<ContactFormType, any>(`/sendMessage`,{contactForm})
    },
};




type ContactFormType = {
    name: string
    email: string
    numberPhone: string
    comment: string
}
