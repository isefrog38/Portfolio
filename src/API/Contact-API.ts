import axios from "axios";

export const instance = axios.create({
    baseURL: `https://smtp-nodejs-rerver.herokuapp.com`,
});

export const ContactAPI = {
    contactForm(contactForm: ContactFormType) {
        return instance.post<ContactFormType, any>(`/sendMessage`, {contactForm})
    },
};


type ContactFormType = {
    name: string
    email: string
    numberPhone: string
    comment: string
}
