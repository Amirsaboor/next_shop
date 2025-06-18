'use client'

import SubmitButton from "@/components/SubmitButton"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"
import { login } from "@/actions/auth"

export default function LoginForm() {
    const [stateLogin, formActionLogin] = useFormState(login, {})

    useEffect(() => {
        toast(stateLogin?.message, { type: stateLogin?.status })

    }, [stateLogin])
    return (
        <div className="card-body ">
            <div className="form_container">
                <form action={formActionLogin}>
                    <div className="mb-3">
                        <label className="form-label">شماره موبایل</label>
                        <input name="cellPhone" type="text" className="form-control" />
                    </div>
                    <SubmitButton style='btn btn-primary btn-auth' title='ورود' />
                </form>
            </div>
        </div>
    )
}