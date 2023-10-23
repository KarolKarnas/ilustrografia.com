import listHelper from '../utils/list_helper';
// import { ProductNoId } from '../types/Product';

test('dummy return 1', () => {
	const blogs = [1, 2, 3];
	const result = listHelper.dummy(blogs);
	expect(result).toBe(1);
});
