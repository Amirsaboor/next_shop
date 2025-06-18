"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";

async function create(state, formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const text = formData.get('text');

    if (name === '' || email === '' || subject === '' || text === '') {
        return {
            status: "error",
            message: "تمام موارد فرم تماس با ما الزامی است."
        }
    }

    const data = await postFetch('/contact-us', { name, email, subject, text });

    if (data.status === 'success') {
        return {
            status: data.status,
            message: "پیام شما با موفقیت ثبت شد",
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message),
        }
    }

}

export { create }