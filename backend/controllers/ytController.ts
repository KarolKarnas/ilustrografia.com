import asyncHandler from '../middleware/asyncHandler';
import axios from 'axios';
import { ytItems } from '../data/ytBackup';

// @desc    Fetch all videos from playlist
// @route   GET /api/videos/neo-slavic-census/:qty
// @access  Public

const getNeoSlavicVideos = asyncHandler(async (req, res) => {
	const qtyYtMovies = req.params.qty;
	try {
		const apiRes = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.CHANNEL_API}&maxResults=${qtyYtMovies}&order=date&type=video&key=${process.env.YOUTUBE_API}`
		);

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
		const youtube = apiRes.data;

		if (youtube) {
			res.json(youtube);
		} else {
			res.status(404);
			throw new Error(`Playlist Data not found`);
		}
	} catch (error) {
		if (error) {
			// Handle any error by sending ytItems as a backup
			res.json(ytItems);
			// res.status(500).json({ message: 'Internal Server Error' });
		}
	}
});

export { getNeoSlavicVideos };
