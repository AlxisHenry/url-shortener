import { now } from "lodash";
import moment from "moment/moment"
import CopyIcon from "./Icon/CopyIcon";

export default function Short({ auth, short }) {

	const copyToClipboard = () => {
		console.log("Hello");
	}

	return (
		<div key={short.id} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg text-white relative">
				<div className="slug">
					{short.slug} 
				</div>
				<div className="url">
					{short.url}
				</div>
				<div className="timestamps">
					created {moment(short.created_at).fromNow()}
				</div>
				<CopyIcon className="absolute top-5 right-5 copy-icon" onClick={() => copyToClipboard()}/>
		</div> 
	)
}
