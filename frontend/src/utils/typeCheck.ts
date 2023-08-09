export const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};

export const isMaterial = (text: unknown): boolean => {
	return (text === 'art-print' || text === 'painting-on-canvas' || text === 'poster' || text === 'premium-print')
}