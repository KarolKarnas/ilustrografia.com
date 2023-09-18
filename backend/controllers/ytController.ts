import asyncHandler from '../middleware/asyncHandler';

// @desc    Fetch all videos from playlist
// @route   GET /api/videos/neo-slavic-census
// @access  Public

const getNeoSlavicVideos = asyncHandler(async (_req, res) => {
	const apiRes = await fetch(
		`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${process.env.PLAYLIST_NEO_SLAVIC_CENSUS}&key=${process.env.YOUTUBE_API}`
	);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const youtube = await apiRes.json();
	if (youtube) {
		res.json(youtube);
	} else {
		res.status(404);
		throw new Error(`Playlist Data not found`);
	}
});

export { getNeoSlavicVideos };
