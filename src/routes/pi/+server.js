import { execFile } from 'child_process';
import { rename } from 'fs';
import path from 'path';
import { promisify } from 'util';
import { readdir, createWriteStream } from 'fs';
import { get } from 'https';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const exec = promisify(execFile);
	const n = Number(url.searchParams.get('n') ?? '10');
	const upper = Number(url.searchParams.get('upper') ?? '10');
	console.log('starting');

	/* const file = createWriteStream('pli.exe');
	await get('https://pi-generator.vercel.app/program.exe', async function (response) {
		response.pipe(file);

		// after download completed close filestream
		await file.on('finish', () => {
			file.close();
			console.log('Download Completed');
		});
	}); */
	/* readdir(path.resolve(), (err, files) => {
		files.forEach((file) => {
			console.log(file);
		});
	}); */
	await exec('./src/executables/unix2/program', [
		`${n}`,
		'pi.txt',
		'table.txt',
		'pi.txt',
		'0',
		`${upper}`
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
