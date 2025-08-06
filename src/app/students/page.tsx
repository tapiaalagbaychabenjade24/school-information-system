'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

export default function Students() {
	const role = 'Administrator';

	const students = [
		{
			first_name: 'Chaben Jade',
			middle_name: 'Tapia',
			last_name: 'Alagbay',
			lrn: '123456789012',
			level: 'Grade 1',
			section: 'Sapphire'
		},
		{
			first_name: 'Carl Vincent',
			middle_name: 'Santos',
			last_name: 'Uy',
			lrn: '234567890123',
			level: 'Grade 2',
			section: 'Jade'
		},
		{
			first_name: 'Maria Luz',
			middle_name: 'Garcia',
			last_name: 'Dela Cruz',
			lrn: '345678901234',
			level: 'Grade 3',
			section: 'Ruby'
		},
		{
			first_name: 'Jose Miguel',
			middle_name: 'Lopez',
			last_name: 'Reyes',
			lrn: '456789012345',
			level: 'Grade 4',
			section: 'Topaz'
		},
		{
			first_name: 'Angela Marie',
			middle_name: 'Torres',
			last_name: 'Santiago',
			lrn: '567890123456',
			level: 'Grade 5',
			section: 'Amethyst'
		},
		{
			first_name: 'Nathan James',
			middle_name: 'Diaz',
			last_name: 'Soriano',
			lrn: '678901234567',
			level: 'Grade 6',
			section: 'Emerald'
		},
		{
			first_name: 'Isabelle Faith',
			middle_name: 'Mendoza',
			last_name: 'Fernandez',
			lrn: '789012345678',
			level: 'Grade 7',
			section: 'Opal'
		},
		{
			first_name: 'Joshua Noel',
			middle_name: 'Rivera',
			last_name: 'Cruz',
			lrn: '890123456789',
			level: 'Grade 8',
			section: 'Garnet'
		},
		{
			first_name: 'Danica Rose',
			middle_name: 'Ramos',
			last_name: 'Navarro',
			lrn: '901234567890',
			level: 'Grade 9',
			section: 'Quartz'
		},
		{
			first_name: 'Marco Elias',
			middle_name: 'Flores',
			last_name: 'Delos Reyes',
			lrn: '112233445566',
			level: 'Grade 10',
			section: 'Diamond'
		},
		{
			first_name: 'Kyla Anne',
			middle_name: 'Torralba',
			last_name: 'Santos',
			lrn: '223344556677',
			level: 'Grade 1',
			section: 'Sapphire'
		},
		{
			first_name: 'Francis Leo',
			middle_name: 'Castro',
			last_name: 'Gomez',
			lrn: '334455667788',
			level: 'Grade 2',
			section: 'Jade'
		},
		{
			first_name: 'Angelica May',
			middle_name: 'Dimaculangan',
			last_name: 'Cuevas',
			lrn: '445566778899',
			level: 'Grade 3',
			section: 'Ruby'
		},
		{
			first_name: 'Lance Gregory',
			middle_name: 'Aguilar',
			last_name: 'Rosales',
			lrn: '556677889900',
			level: 'Grade 4',
			section: 'Topaz'
		},
		{
			first_name: 'Bea Althea',
			middle_name: 'Velasco',
			last_name: 'Buenaventura',
			lrn: '667788990011',
			level: 'Grade 5',
			section: 'Amethyst'
		},
		{
			first_name: 'Jared Philip',
			middle_name: 'Salvador',
			last_name: 'Torres',
			lrn: '778899001122',
			level: 'Grade 6',
			section: 'Emerald'
		},
		{
			first_name: 'Camille Joyce',
			middle_name: 'Reyes',
			last_name: 'Caballero',
			lrn: '889900112233',
			level: 'Grade 7',
			section: 'Opal'
		},
		{
			first_name: 'Sean Patrick',
			middle_name: 'Bautista',
			last_name: 'Andres',
			lrn: '990011223344',
			level: 'Grade 8',
			section: 'Garnet'
		},
		{
			first_name: 'Trisha Nicole',
			middle_name: 'Sarmiento',
			last_name: 'Quintos',
			lrn: '101112131415',
			level: 'Grade 9',
			section: 'Quartz'
		},
		{
			first_name: 'Rafael Dominic',
			middle_name: 'Galang',
			last_name: 'Manalo',
			lrn: '121314151617',
			level: 'Grade 10',
			section: 'Diamond'
		}
	];

	const { data } = useQuery({
		queryKey: ['students'],
		queryFn: () => students
	});

	const [searchFullName, setSearchFullName] = useState<string>('');
	const [selectedLevelSection, setSelectedLevelSection] =
		useState<string>('Grade 1 — Sapphire');

	const router = useRouter();

	if (role === 'Administrator') {
		return (
			<div className='space-y-3 min-max'>
				<div className='flex gap-2'>
					<Input
						type='search'
						placeholder='Search Full Name'
						onChange={event => setSearchFullName(event.target.value)}
						className='!text-base bg-white h-auto w-56 py-2 px-3 shadow-none'
					/>

					<Select
						onValueChange={setSelectedLevelSection}
						defaultValue={selectedLevelSection}
					>
						<SelectTrigger className='text-base bg-white !h-auto w-56 py-2 px-3 shadow-none'>
							<SelectValue />
						</SelectTrigger>

						<SelectContent>
							<SelectGroup>
								<SelectItem
									value='Grade 1 — Sapphire'
									className='text-base'
								>
									Grade 1 — Sapphire
								</SelectItem>

								<SelectItem
									value='Grade 2 — Jade'
									className='text-base'
								>
									Grade 2 — Jade
								</SelectItem>

								<SelectItem
									value='Grade 3 — Ruby'
									className='text-base'
								>
									Grade 3 — Ruby
								</SelectItem>

								<SelectItem
									value='Grade 4 — Topaz'
									className='text-base'
								>
									Grade 4 — Topaz
								</SelectItem>

								<SelectItem
									value='Grade 5 — Amethyst'
									className='text-base'
								>
									Grade 5 — Amethyst
								</SelectItem>

								<SelectItem
									value='Grade 6 — Emerald'
									className='text-base'
								>
									Grade 6 — Emerald
								</SelectItem>

								<SelectItem
									value='Grade 7 — Opal'
									className='text-base'
								>
									Grade 7 — Opal
								</SelectItem>

								<SelectItem
									value='Grade 8 — Garnet'
									className='text-base'
								>
									Grade 8 — Garnet
								</SelectItem>

								<SelectItem
									value='Grade 9 — Quartz'
									className='text-base'
								>
									Grade 9 — Quartz
								</SelectItem>

								<SelectItem
									value='Grade 10 — Diamond'
									className='text-base'
								>
									Grade 10 — Diamond
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className='border border-haze rounded-lg w-full overflow-hidden'>
					<table className='text-left bg-white rounded-lg w-full'>
						<thead className='bg-abyss text-white'>
							<tr>
								<th className='font-semibold border border-t-0 border-l-0 border-haze py-2 px-3'>
									FULL NAME
								</th>

								<th className='font-semibold border border-t-0 border-haze py-2 px-3'>
									LRN
								</th>

								<th className='font-semibold border border-t-0 border-haze w-44 py-2 px-3'>
									GRADE
								</th>

								<th className='font-semibold border border-t-0 border-r-0 border-haze w-44 py-2 px-3'>
									SECTION
								</th>
							</tr>
						</thead>

						<tbody>
							{data
								?.filter(
									student =>
										`${student.level} — ${student.section}` ===
										selectedLevelSection
								)
								?.filter(student =>
									`${student.first_name} ${student.middle_name} ${student.last_name}`
										.toLowerCase()
										.includes(searchFullName.toLowerCase())
								)
								?.map((student, index) => (
									<tr
										key={index}
										onClick={() =>
											router.push(
												`students/${student.lrn}/student-information`
											)
										}
										className='hover:bg-sky cursor-pointer'
									>
										<td className='border border-l-0 border-b-0 border-haze py-2 px-3'>
											{`${student.last_name}, ${student.first_name} ${student.middle_name}`}
										</td>

										<td className='border border-b-0 border-haze py-2 px-3'>
											{student.lrn}
										</td>

										<td className='border border-b-0 border-haze py-2 px-3'>
											{student.level}
										</td>

										<td className='border border-r-0 border-b-0 border-haze py-2 px-3'>
											{student.section}
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
