import asyncHandler from '../middleware/asyncHandler';
import fetch from 'node-fetch';

// @desc    Fetch all videos from playlist
// @route   GET /api/videos/neo-slavic-census
// @access  Public

// const getNeoSlavicVideos = asyncHandler(async (_req, res) => {
// 	const apiRes = await fetch(
// 		`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.CHANNEL_API}&maxResults=3&order=date&type=video&key=${process.env.YOUTUBE_API}`
// 	);
// 	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// 	const youtube = await apiRes.json();
// 	if (youtube) {
// 		res.json(youtube);
// 	} else {
// 		res.status(404);
// 		throw new Error(`Playlist Data not found`);
// 	}
// });

const getNeoSlavicVideos = asyncHandler(async (_req, res) => {
	try {
		const apiRes = await fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.CHANNEL_API}&maxResults=3&order=date&type=video&key=${process.env.YOUTUBE_API}`
		);

		if (!apiRes.ok) {
			throw new Error(`Failed to fetch data from YouTube API`);
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const youtube = await apiRes.json();

		if (youtube) {
			res.json(youtube);
		} else {
			res.status(404);
			throw new Error(`Playlist Data not found`);
		}
	} catch (error) {
		// console.error('Error in getNeoSlavicVideos:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});


export { getNeoSlavicVideos };
