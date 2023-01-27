import App from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Home(props) {
    return (
        <App auth={props.auth} errors={props.errors} header={ <h2
            className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Thanks for using our application 🔥
            </h2> }
            >

            <Head title="URL Shortener" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Hi, this website is inspired by <strong><a
                                    href="https://bitly.com/">bitly.com</a></strong>!</div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            My website is just made to learn more about Laravel and React.
                            If you want to be sure to have working links, use <strong><a
                                    href="https://bitly.com/">bitly.com</a></strong> !
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Sorry but I can't assure you that your links will stay working.
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Hi, this website is inspired by <strong><a
                                    href="https://bitly.com/">bitly.com</a></strong>!</div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            My website is just made to learn more about Laravel and React.
                            If you want to be sure to have working links, use <strong><a
                                    href="https://bitly.com/">bitly.com</a></strong> !
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Sorry but I can't assure you that your links will stay working.
                        </div>
                    </div>
                </div>
            </div>            

        </App>
    );
}
