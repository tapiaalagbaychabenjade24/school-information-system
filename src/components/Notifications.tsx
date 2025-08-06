import Link from 'next/link';

export default function Notifications() {
	return (
		<div className='border border-haze rounded-lg w-full overflow-hidden'>
			<table className='text-left bg-white rounded-lg w-full'>
				<tbody>
					{[
						{
							status: true,
							subject: 'Araling Panlipunan',
							content:
								'Alagbay, Chaben Jade 2563 Araling Panlipunan Grade has been posted',
							create_at: 'Jul 18'
						},
						{
							status: true,
							subject: 'Mathematics',
							content:
								'Alagbay, Chaben Jade 2563 Mathematics Grade has been posted',
							create_at: 'Jul 18'
						},
						{
							status: false,
							subject: 'Science',
							content:
								'Alagbay, Chaben Jade 2563 Science Grade has been posted',
							create_at: 'Jul 18'
						},
						{
							status: true,
							subject: 'Mathematics',
							content:
								'Alagbay, Chaben Jade 2563 Mathematics Grade has been posted',
							create_at: 'Jul 18'
						},
						{
							status: false,
							subject: 'Science',
							content:
								'Alagbay, Chaben Jade 2563 Science Grade has been posted',
							create_at: 'Jul 18'
						},
						{
							status: true,
							subject: 'Mathematics',
							content:
								'Alagbay, Chaben Jade 2563 Mathematics Grade has been posted',
							create_at: 'Jul 18'
						},
						{
							status: false,
							subject: 'Science',
							content:
								'Alagbay, Chaben Jade 2563 Science Grade has been posted',
							create_at: 'Jul 18'
						},
						{
							status: true,
							subject: 'Mathematics',
							content:
								'Alagbay, Chaben Jade 2563 Mathematics Grade has been posted',
							create_at: 'Jul 18'
						},
						{
							status: true,
							subject: 'Science',
							content:
								'Alagbay, Chaben Jade 2563 Science Grade has been posted',
							create_at: 'Jul 18'
						},
						{
							status: true,
							subject: 'Mathematics',
							content:
								'Alagbay, Chaben Jade 2563 Mathematics Grade has been posted',
							create_at: 'Jul 18'
						}
					].map((notification, index) => (
						<tr
							key={index}
							className={`${
								!notification.status
									? 'bg-sky font-normal'
									: 'font-semibold'
							} border-b nth-last-[1]:border-0 border-b-haze`}
						>
							<td>
								<Link
									href='/grades'
									className='flex justify-between items-center p-3'
								>
									<div className='flex gap-10'>
										<div className='flex items-center gap-2'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='size-5'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
												/>
											</svg>

											<span className='block w-[180px]'>
												{notification.subject}
											</span>
										</div>

										<p>{notification.content}</p>
									</div>

									{notification.status ? (
										<div className='bg-red rounded-full h-2 w-2' />
									) : (
										<p>{notification.create_at}</p>
									)}
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
