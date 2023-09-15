import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';

import { UserInfoOptions } from '../types/User';
import { FaUserAlt } from 'react-icons/fa';

interface Props {
	userInfo: UserInfoOptions;
	handleLogout: () => Promise<void>;
}

const Dropdown = ({ userInfo, handleLogout }: Props) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<div className=' '>
					<FaUserAlt className='' />
				</div>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content className='DropdownMenuContent'>
					<DropdownMenu.Item>
						{' '}
						<Link to={'/profile'}>{userInfo.name} User</Link>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						{' '}
						<button onClick={handleLogout}>Logout</button>
					</DropdownMenu.Item>

					{userInfo.isAdmin && (
						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger className='bg-red-500'>
								Admin →
							</DropdownMenu.SubTrigger>
							<DropdownMenu.Portal>
								<DropdownMenu.SubContent>
									<DropdownMenu.Item>
										{' '}
										<Link to={'/admin/product-list'}>Product List </Link>
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										{' '}
										<Link to={'/admin/user-list'}>User List </Link>
									</DropdownMenu.Item>

									<DropdownMenu.Item>
										{' '}
										<Link to={'/admin/order-list'}>Order List </Link>
									</DropdownMenu.Item>

									<DropdownMenu.Arrow />
								</DropdownMenu.SubContent>
							</DropdownMenu.Portal>
						</DropdownMenu.Sub>
					)}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default Dropdown;
