import { unstable_noStore as noStore } from 'next/cache';
import { CurrentTimeFromAPI } from './CurrentTimeFromAPI';

export default function Home() {
	noStore();

	const timeOnServer = new Date().toLocaleTimeString('en-US');
	return(
		<>
			<div className="flex items-center justify-between p-2">
				This is a Next.js application hosted on Azure Static Web Apps with hybrid rendering. The time on the server is {timeOnServer}
			</div>
			<CurrentTimeFromAPI />
		</>
	);
}