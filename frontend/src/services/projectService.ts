import axios from 'axios';
import { Project } from '../_types';

const getAll = async () => {
	const { data } = await axios.get<Project[]>('/api/projects');
	return data;
};

export default { getAll };
