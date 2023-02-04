import { execFile } from 'child_process';
import { rename } from 'fs';
import { promisify } from 'util';
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const exec = promisify(execFile);
	const n = Number(url.searchParams.get('n') ?? '10');
	const upper = Number(url.searchParams.get('upper') ?? '10');
	console.log('starting');
	await exec(
		'C:\\Users\\prusak.patryk\\projects\\pi_generator\\src\\executables\\v2\\program.exe',
		[`${n}`, '0', `${n}`, 'pi.txt', 'table.txt', '0', `${upper}`, 'pi.txt']
	);

	rename('./pi.txt', './src/pi.txt', function (err) {
		if (err) console.log(err);
	});

	rename('./table.txt', './src/table.txt', function (err) {
		if (err) console.log(err);
	});

	console.log('done');
	return new Response();
}
