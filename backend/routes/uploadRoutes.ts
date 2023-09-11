import path from 'path';
import express, { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
	destination(_req, _file, cb) {
		cb(null, path.join(__dirname, '../../uploads'));
	},
	filename(_req, file, cb) {
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

function fileFilter(
	_req: Request,
	file: Express.Multer.File,
	cb: FileFilterCallback
) {
	const filetypes = /jpe?g|png|webp/;
	const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = mimetypes.test(file.mimetype);

	if (extname && mimetype) {
		cb(null, true);
	} else {
		cb({ name: 'Error', message: 'Images only!' });
	}
}

const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single('image');

router.post('/', (req, res) => {
	uploadSingleImage(req, res, function (err) {
		if (err instanceof Error) {
			return res.status(400).send({ message: err.message });
		}

		if (req.file) {
			const uploadedFile: Express.Multer.File = req.file;

			// console.log(uploadedFile);

			res.status(200).send({
				message: 'Image uploaded successfully',
				image: `/uploads/${uploadedFile.filename}`,
			});
			return;
		} else {
			res.status(404).send('No image');
		}

		return;
	});
});

export default router;
