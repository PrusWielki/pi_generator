import { execFile } from 'child_process';
import { rename } from 'fs';
import path from 'path';
import { promisify } from 'util';
import { readdir } from 'fs';
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const exec = promisify(execFile);
	const n = Number(url.searchParams.get('n') ?? '10');
	const upper = Number(url.searchParams.get('upper') ?? '10');
	console.log('starting');
	console.log('path:', path.resolve());
	readdir('./.output', (err, files) => {
		files.forEach((file) => {
			console.log(file);
		});
	});

	await exec('.\\build\\client\\program.exe', [
		`${n}`,
		'0',
		`${n}`,
		'pi.txt',
		'table.txt',
		'0',
		`${upper}`,
		'pi.txt'
	]);

	rename('./pi.txt', './src/pi.txt', function (err) {
		if (err) console.log(err);
	});

	rename('./table.txt', './src/table.txt', function (err) {
		if (err) console.log(err);
	});

	console.log('done');
	return new Response();
}
