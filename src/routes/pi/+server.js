import { error } from '@sveltejs/kit';
import { execFile } from 'child_process';
/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const min = Number(url.searchParams.get('min') ?? '0');
	const max = Number(url.searchParams.get('max') ?? '1');

	const d = max - min;

	if (isNaN(d) || d < 0) {
		throw error(400, 'min and max must be numbers, and min must be less than max');
	}

	const random = min + Math.random() * d;
	execFile(
		'C:\\Users\\prusak.patryk\\projects\\pi_generator\\src\\executables\\v1\\program.exe',
		['10', '0', '10', 'pi.txt', 'table.txt', '0', '10', 'pi.txt'],
		function (err, data) {
			console.log(err);
			console.log(data.toString());
		}
	);

	return new Response(String(random));
}
