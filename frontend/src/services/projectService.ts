import axios from 'axios';
import { Project } from '../types';

const getAll = async () => {
  const {data } = await axios.get<Project[]>('/api/projects')
  return data
}

export default {getAll}