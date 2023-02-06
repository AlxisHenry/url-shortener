import App from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import axios from 'axios';
import { useState } from 'react';

export default function Home(props) {

    const [formData, setFormData] = useState({
        url: '',
        _token: ''
    })

    const handleChange = (e) => {
        let [name, value] = [e.target.name, e.target.value]
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)
    }

    return (
        <App auth={props.auth} errors={props.errors}>

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
                        <div>
                            <form className='p-6 text-gray-900 dark:text-gray-100' method="POST" action="/shorts">

                                <InputLabel className='my-2' forInput="url" value="Create a new short here 🔥" />
                                <TextInput
                                    id="url"
                                    type="text"
                                    value={formData.url}
                                    name="url"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={handleChange}
                                />
                                <input type="hidden" name="_token" value={props._token} />
                                <PrimaryButton className="my-4 block w-full">SHORT</PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
