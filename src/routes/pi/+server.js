import { execFile } from 'child_process';
/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const n = Number(url.searchParams.get('n') ?? '10');
	const upper = Number(url.searchParams.get('upper') ?? '10');
	console.log('starting');
	execFile(
		'C:\\Users\\prusak.patryk\\projects\\pi_generator\\src\\executables\\v1\\program.exe',
		[`${n}`, '0', `${n}`, 'pi.txt', 'table.txt', '0', `${upper}`, 'pi.txt'],
		function (err) {
			console.log(err);
		}
	);
	console.log('done');
	return new Response();
}
