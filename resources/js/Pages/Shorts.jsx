import App from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import { useState, useRef } from 'react';
import Short from '../Components/Short';

export default function Shorts({ auth, shorts, paginate, errors }) {
    
    const { data } = shorts;
    
    let links = [];

    if (!shorts.links) {
        const state = {
            previous: { url: shorts.prev_page_url, label: "⏮️ Previous", active: false },
            current: { url: null, label: shorts.current_page, active: true },
            next: { url: shorts.next_page_url, label: "Next ⏭️", active: false } 
        }
        links = [
            state.previous,
            shorts.current_page !== 1 
                ? { ...state.previous, label: shorts.current_page - 1 } 
                : { ...state.next, url: `${shorts.path}?page=${paginate.pagesCount}`, label: paginate.pagesCount },
            state.current,
            shorts.current_page !== paginate.pagesCount 
                ? { ...state.next, label: shorts.current_page + 1 } 
                : { ...state.previous, url: `${shorts.path}?page=1`, label: 1 },
            state.next
        ] 
    } else {
        links = shorts.links
    }

    return (
    <App auth={auth} errors={errors} header={ <h2
        className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Thanks for using our application 🔥
        </h2> } >

        <Head title="URL Shortener" />

        <div className="mt-4 flex justify-center">
            <Pagination class="mt-4" links={links} />
        </div>

        <div className="py-10">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                { data.map((short) => {
                    return <Short key={short.id} auth={auth} short={short}/>
                }) }
            </div>
        </div>

        <div className=" flex justify-center">
            <Pagination links={links} />
        </div>

    </App>
    );
}
