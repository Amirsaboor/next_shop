'use client'
import { checkOtp } from "@/actions/auth"
import SubmitButton from "@/components/SubmitButton"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"

export default function CheckOtpForm() {
    const [stateOtp, formActionOtp] = useFormState(checkOtp, {})

    useEffect(() => {
        toast(stateOtp?.message, { type: stateOtp?.status })

    }, [stateOtp])
    return (
        <div className="card-body ">
            <div className="form_container">
                <form action={formActionOtp}>
                    <div className="mb-3">
                        <label className="form-label">کد ورود</label>
                        <input name="otp" type="text" className="form-control" />
                    </div>
                    <SubmitButton style='btn btn-primary btn-auth' title='تایید' />
                </form>
            </div>
        </div>
    )
}