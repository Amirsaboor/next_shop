"use client"

import { useFormStatus } from 'react-dom'

export default function SubmitButton({ title, style }) {
    const { pending } = useFormStatus();

    return (
        <button type='submit' disabled={pending} className={style}>
            {title}
            {pending && <div className="spinner-border spinner-border-sm ms-2"></div>}
        </button>
    )
}