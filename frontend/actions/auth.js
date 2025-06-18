'use server'

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { getMaxAge } from "next/dist/server/image-optimizer"
import { cookies } from "next/headers"

async function login(stateLogin, formData) {
    const cellphone = formData.get('cellPhone')
    const pattern = /^(\+98|0)?9\d{9}$/


    if (cellphone === '') {
        return {
            status: 'error',
            message: 'شماره موبایل الزامی است'
        }
    }
    if (!pattern.test(cellphone)) {
        return {
            status: 'error',
            message: 'شماره موبایل معتبر نیست'
        }
    }

    const data = await postFetch('/auth/login', { cellphone })

    if (data.status === 'success') {

        await (cookies().set({
            name: 'login_token',
            value: data.data.login_token,
            httpOnly: true,
            maxAge: 60 * 60 * 24 //1 day

        }))



        return {
            status: data.status,
            message: 'کد ورود با موفقیت ارسال شد'
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message)
        }
    }

}


async function checkOtp(stateOtp, formData) {
    const otp = formData.get('otp')
    const pattern = /^[0-9]{6}$/
    const login_token = await (cookies?.get('login_token'))
    if (otp === '') {
        return {
            status: 'error',
            message: ' وارد کردن کد ورود الزامی است'
        }
    }

    if (!pattern.test(otp)) {
        return {
            status: 'error',
            message: ' کد ورود معتبر نیست'
        }
    }


    // const data = await postFetch('/auth/check-otp', { otp, login_token })
    // console.log('hiiiiiiiiii', data);

    // if (data.status === 'success') {
    //     return {
    //         status: data.status,
    //         message: 'کد ورود با موفقیت ارسال شد'
    //     }
    // } else {
    //     return {
    //         status: data.status,
    //         message: handleError(data.message)
    //     }
    // }

}

export { login, checkOtp }