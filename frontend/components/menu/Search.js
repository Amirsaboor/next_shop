'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Search() {
    const [term, setTerm] = useState('')
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    useEffect(() => {
        setTerm('')
        router.replace(`${pathname}`)
    }, [])
    const handleSearch = (remove) => {
        const params = new URLSearchParams(searchParams)
        params.delete('page')

        if (remove) {
            params.delete('search')
            setTerm('')
            router.replace(`${pathname}`)

        }
        else {
            params.set('search', term)
            router.replace(`${pathname}?${params.toString()}`)
        }
    }
    return (
        <div>
            <label className="form-label">جستجو</label>
            {term.length > 0 && <span
                onClick={() => handleSearch(true)}
                className="text-danger fs-4 cursor-pointer">
                <i className="bi bi-x"></i>
            </span>}
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="نام محصول ..."
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button href="#" className="input-group-text" onClick={() => term !== '' && handleSearch()}>
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </div>
    )
}