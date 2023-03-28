import App from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Short from "../../Components/Short";

export default function Shorts({ auth, shorts, paginate }) {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    let links = [];

    if (!shorts.links) {
        let url = {
            firstPage: `${shorts.path}?page=1`,
            lastPage: `${shorts.path}?page=${paginate.pagesCount}`,
        };
        const state = {
            previous: {
                url: shorts.prev_page_url ?? url.lastPage,
                label: "⏮️ Previous",
                active: false,
            },
            current: { url: null, label: shorts.current_page, active: true },
            next: {
                url: shorts.next_page_url ?? url.firstPage,
                label: "Next ⏭️",
                active: false,
            },
        };
        links = [
            state.previous,
            shorts.current_page !== 1
                ? { ...state.previous, label: shorts.current_page - 1 }
                : {
                      ...state.next,
                      url: url.lastPage,
                      label: paginate.pagesCount,
                  },
            state.current,
            shorts.current_page !== paginate.pagesCount
                ? { ...state.next, label: shorts.current_page + 1 }
                : { ...state.previous, url: `${shorts.path}?page=1`, label: 1 },
            state.next,
        ];
    } else {
        console.log(shorts.links)
        links = shorts.links;
    }

    return (
        <App
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Your shorts {capitalize(auth.user.name)} 🌟
                </h2>
            }
        >
            <Head title="Your shorts" />

            <div className=" flex justify-center">
                <Pagination class="" links={links} />
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {shorts.data.map((short) => {
                        return (
                            <Short key={short.id} auth={auth} short={short} />
                        );
                    })}
                </div>
            </div>

            <div className=" flex justify-center">
                <Pagination class="" links={links} />
            </div>
        </App>
    );
}
