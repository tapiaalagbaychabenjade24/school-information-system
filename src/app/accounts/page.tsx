'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Accounts() {
	const role = 'Administrator';

	const accounts = [
		{
			first_name: 'Chaben Jade',
			middle_name: 'Tapia',
			last_name: 'Alagbay',
			email: 'alagbaychabenjade24@gmail.com',
			mobile_number: '09205172358',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Angelica',
			middle_name: 'Reyes',
			last_name: 'Santos',
			email: 'angelica.santos01@gmail.com',
			mobile_number: '09123456789',
			role: 'Faculty'
		},
		{
			first_name: 'Mark Joseph',
			middle_name: 'De la Cruz',
			last_name: 'Garcia',
			email: 'markjoseph.garcia99@yahoo.com',
			mobile_number: '09981234567',
			role: 'Administrator'
		},
		{
			first_name: 'Maria',
			middle_name: 'Lopez',
			last_name: 'Torres',
			email: 'maria.torres21@gmail.com',
			mobile_number: '09091234567',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Jonathan',
			middle_name: 'Ramirez',
			last_name: 'Flores',
			email: 'jonathan.flores@email.com',
			mobile_number: '09181235678',
			role: 'Faculty'
		},
		{
			first_name: 'Christine',
			middle_name: 'Lim',
			last_name: 'Mendoza',
			email: 'christine.mendoza@email.com',
			mobile_number: '09222334455',
			role: 'Administrator'
		},
		{
			first_name: 'Daniel',
			middle_name: 'Reyes',
			last_name: 'Fernandez',
			email: 'daniel.fernandez@gmail.com',
			mobile_number: '09335556677',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Elaine',
			middle_name: 'Castro',
			last_name: 'Alvarez',
			email: 'elaine.alvarez@yahoo.com',
			mobile_number: '09119998877',
			role: 'Faculty'
		},
		{
			first_name: 'Nathaniel',
			middle_name: 'Uy',
			last_name: 'Chua',
			email: 'nathaniel.chua@protonmail.com',
			mobile_number: '09446668855',
			role: 'Administrator'
		},
		{
			first_name: 'Grace',
			middle_name: 'Santos',
			last_name: 'Lim',
			email: 'grace.lim22@gmail.com',
			mobile_number: '09098887766',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Kevin',
			middle_name: 'Tan',
			last_name: 'Dela Cruz',
			email: 'kevin.dc@gmail.com',
			mobile_number: '09100012345',
			role: 'Faculty'
		},
		{
			first_name: 'Alyssa',
			middle_name: 'Go',
			last_name: 'Manalo',
			email: 'alyssa.manalo@outlook.com',
			mobile_number: '09337775555',
			role: 'Administrator'
		},
		{
			first_name: 'Patrick',
			middle_name: 'Tolentino',
			last_name: 'Morales',
			email: 'patrick.morales@email.com',
			mobile_number: '09209997777',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Isabelle',
			middle_name: 'Chavez',
			last_name: 'Marquez',
			email: 'isabelle.marquez@gmail.com',
			mobile_number: '09177778888',
			role: 'Faculty'
		},
		{
			first_name: 'Michael',
			middle_name: 'Abad',
			last_name: 'Ramos',
			email: 'michael.ramos@email.com',
			mobile_number: '09442223344',
			role: 'Administrator'
		},
		{
			first_name: 'Samantha',
			middle_name: 'Dizon',
			last_name: 'Ocampo',
			email: 'samantha.ocampo@gmail.com',
			mobile_number: '09554442211',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Jerome',
			middle_name: 'Villanueva',
			last_name: 'Salazar',
			email: 'jerome.salazar@gmail.com',
			mobile_number: '09134443322',
			role: 'Faculty'
		},
		{
			first_name: 'Camille',
			middle_name: 'Roxas',
			last_name: 'Delos Reyes',
			email: 'camille.reyes@hotmail.com',
			mobile_number: '09218887777',
			role: 'Administrator'
		},
		{
			first_name: 'Adrian',
			middle_name: 'Flores',
			last_name: 'Yap',
			email: 'adrian.yap@email.com',
			mobile_number: '09336669900',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Bea',
			middle_name: 'Cruz',
			last_name: 'Navarro',
			email: 'bea.navarro@live.com',
			mobile_number: '09112223344',
			role: 'Faculty'
		},
		{
			first_name: 'Ronald',
			middle_name: 'Lopez',
			last_name: 'Cortez',
			email: 'ronald.cortez@gmail.com',
			mobile_number: '09081114455',
			role: 'Administrator'
		},
		{
			first_name: 'Jasmine',
			middle_name: 'Tiu',
			last_name: 'Diaz',
			email: 'jasmine.diaz@protonmail.com',
			mobile_number: '09112228999',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Enrico',
			middle_name: 'Gomez',
			last_name: 'Padilla',
			email: 'enrico.padilla@email.com',
			mobile_number: '09337772211',
			role: 'Faculty'
		},
		{
			first_name: 'Katrina',
			middle_name: 'Velasco',
			last_name: 'Ortega',
			email: 'katrina.ortega@gmail.com',
			mobile_number: '09556667788',
			role: 'Administrator'
		},
		{
			first_name: 'Luis',
			middle_name: 'Torres',
			last_name: 'Gonzales',
			email: 'luis.gonzales@email.com',
			mobile_number: '09201114477',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Mikaela',
			middle_name: 'Del Rosario',
			last_name: 'Magtoto',
			email: 'mika.magtoto@gmail.com',
			mobile_number: '09441113322',
			role: 'Faculty'
		},
		{
			first_name: 'Joshua',
			middle_name: 'Baltazar',
			last_name: 'San Pedro',
			email: 'joshua.sanpedro@email.com',
			mobile_number: '09356668811',
			role: 'Administrator'
		},
		{
			first_name: 'Patricia',
			middle_name: 'Lagman',
			last_name: 'Bautista',
			email: 'patricia.bautista@outlook.com',
			mobile_number: '09095554433',
			role: 'Parent / Guardian'
		},
		{
			first_name: 'Francis',
			middle_name: 'Domingo',
			last_name: 'Vergara',
			email: 'francis.vergara@email.com',
			mobile_number: '09123336677',
			role: 'Faculty'
		}
	];

	const { data } = useQuery({
		queryKey: ['accounts'],
		queryFn: () => accounts
	});

	const [searchFullName, setSearchFullName] = useState<string>('');
	const [selectedRole, setSelectedRole] =
		useState<string>('Parent / Guardian');

	const router = useRouter();

	if (role !== 'Administrator') router.push('/');

	return (
		<div className='space-y-3 min-max'>
			<div className='flex justify-between items-center'>
				<div className='flex gap-2'>
					<Input
						type='search'
						placeholder='Search Full Name'
						onChange={event => setSearchFullName(event.target.value)}
						className='!text-base bg-white h-auto w-56 py-2 px-3 shadow-none'
					/>

					<Select
						onValueChange={setSelectedRole}
						defaultValue={selectedRole}
					>
						<SelectTrigger className='text-base bg-white !h-auto w-56 py-2 px-3 shadow-none'>
							<SelectValue />
						</SelectTrigger>

						<SelectContent>
							<SelectGroup>
								<SelectItem value='Administrator' className='text-base'>
									Administrator
								</SelectItem>

								<SelectItem value='Faculty' className='text-base'>
									Faculty
								</SelectItem>

								<SelectItem
									value='Parent / Guardian'
									className='text-base'
								>
									Parent / Guardian
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<Button className='bg-white hover:bg-abyss text-base text-pitch hover:text-white border h-auto py-2 px-3 cursor-pointer shadow-none'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						className='size-5'
					>
						<path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
					</svg>

					<span>Create New Account</span>
				</Button>
			</div>

			<div className='border border-haze rounded-lg w-full overflow-hidden'>
				<table className='text-left bg-white rounded-lg w-full'>
					<thead className='bg-abyss text-white'>
						<tr>
							<th className='font-semibold border border-t-0 border-l-0 border-haze py-2 px-3'>
								FULL NAME
							</th>

							<th className='font-semibold border border-t-0 border-haze py-2 px-3'>
								EMAIL
							</th>

							<th className='font-semibold border border-t-0 border-haze w-44 py-2 px-3'>
								MOBILE NUMBER
							</th>

							<th className='font-semibold border border-t-0 border-r-0 border-haze w-44 py-2 px-3'>
								ROLE
							</th>
						</tr>
					</thead>

					<tbody>
						{data
							?.filter(account => account.role === selectedRole)
							?.filter(account =>
								`${account.first_name} ${account.middle_name} ${account.last_name}`
									.toLowerCase()
									.includes(searchFullName.toLowerCase())
							)
							?.map((account, index) => (
								<tr key={index} className='hover:bg-sky cursor-default'>
									<td className='border border-l-0 border-b-0 border-haze py-2 px-3'>
										{`${account.last_name}, ${account.first_name} ${account.middle_name}`}
									</td>

									<td className='border border-b-0 border-haze py-2 px-3'>
										{account.email}
									</td>

									<td className='border border-b-0 border-haze py-2 px-3'>
										{account.mobile_number}
									</td>

									<td className='border border-r-0 border-b-0 border-haze py-2 px-3'>
										{account.role}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
