import App from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import Short from '../../Components/Short';

export default function Shorts({ auth, shorts }) {

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
    
shorts.links[0].label = "⏮️ Previous";
shorts.links[shorts.links.length - 1].label = "Next ⏭️";

return (
<App auth={auth} header={ <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Your
    shorts { capitalize(auth.user.name) } 🌟</h2> } >

    <Head title="Your shorts" />
    
    <div className=" flex justify-center">
        <Pagination class="" links={shorts.links} />
    </div>

    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            { shorts.data.map((short) => {
                return <Short key={short.id} auth={auth} short={short}/>
            }) }
        </div>
    </div>

    <div className=" flex justify-center">
        <Pagination class="" links={shorts.links} />
    </div>

</App>
);
}
