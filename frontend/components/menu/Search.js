"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

export default function Search() {
    const [term, setTerm] = useState('');
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams()

    function handleSearch(remove) {
        const params = new URLSearchParams(searchParams);
        params.delete('page');

        if (remove) {
            params.delete('search');
            setTerm('');
        } else {
            params.set('search', term)
        }

        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div>
            <label className="form-label">جستجو</label>

            {searchParams.has('search') && <span
                onClick={() => handleSearch(true)}
                className="text-danger fs-4 cursor-pointer">
                <i class="bi bi-x"></i>
            </span>}

            <div className="input-group mb-3">
                <input onChange={(e) => setTerm(e.target.value)} value={term} type="text" className="form-control" placeholder="نام محصول ..." />
                <button onClick={() => term !== '' && handleSearch()} className="input-group-text">
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </div>
    )
}