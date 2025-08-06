'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface Schedule {
	level: string;
	section: string;
	subject: string;
	teacher: string | null;
	day: string;
	time: string;
}

export default function ClassSchedules() {
	const role = 'Administrator';

	const schedules = [
		{
			level: '10',
			section: 'Diamond',
			subject: 'Flag Ceremony',
			teacher: null,
			day: 'Monday - Friday',
			time: '07:30 AM - 08:00 AM'
		},
		{
			level: '10',
			section: 'Diamond',
			subject: 'Morning Snacks',
			teacher: null,
			day: 'Monday - Friday',
			time: '09:00 AM - 09:15 AM'
		},
		{
			level: '10',
			section: 'Diamond',
			subject: 'Lunch Break',
			teacher: null,
			day: 'Monday - Friday',
			time: '12:00 PM - 01:00 PM'
		},
		{
			level: '10',
			section: 'Diamond',
			subject: 'Afternoon Snacks',
			teacher: null,
			day: 'Monday - Friday',
			time: '03:00 PM - 03:15 PM'
		},
		{
			level: '10',
			section: 'Diamond',
			subject: 'EsP',
			teacher: 'Teacher Chaben Jade T. Alagbay',
			day: 'Monday - Friday',
			time: '03:15 PM - 04:00 PM'
		},
		{
			level: '09',
			section: 'Quartz',
			subject: 'Flag Ceremony',
			teacher: null,
			day: 'Monday - Friday',
			time: '07:30 AM - 08:00 AM'
		},
		{
			level: '09',
			section: 'Quartz',
			subject: 'Morning Snacks',
			teacher: null,
			day: 'Monday - Friday',
			time: '09:00 AM - 09:15 AM'
		},
		{
			level: '09',
			section: 'Quartz',
			subject: 'Lunch Break',
			teacher: null,
			day: 'Monday - Friday',
			time: '12:00 PM - 01:00 PM'
		},
		{
			level: '09',
			section: 'Quartz',
			subject: 'Afternoon Snacks',
			teacher: null,
			day: 'Monday - Friday',
			time: '03:00 PM - 03:15 PM'
		},
		{
			level: '09',
			section: 'Quartz',
			subject: 'EsP',
			teacher: 'Teacher Chaben Jade T. Alagbay',
			day: 'Monday - Friday',
			time: '03:15 PM - 04:00 PM'
		}
	];

	const { data } = useQuery({
		queryKey: ['schedules'],
		queryFn: () => schedules
	});

	const groupedSchedules = data?.reduce<Record<string, Schedule[]>>(
		(accumulator, currentValue) => {
			const key = `${currentValue.level} — ${currentValue.section}`;

			if (!accumulator[key]) {
				accumulator[key] = [];
			}

			accumulator[key].push(currentValue);

			return accumulator;
		},
		{}
	);

	const [selectedLevelSection, setSelectedLevelSection] =
		useState<string>('All');

	if (!groupedSchedules) return <p>Data is still loading...</p>;

	return (
		<div className='space-y-3 min-max'>
			<div className='flex justify-between items-center'>
				<Select
					onValueChange={setSelectedLevelSection}
					defaultValue={selectedLevelSection}
				>
					<SelectTrigger className='text-base bg-white !h-auto w-56 py-2 px-3 shadow-none'>
						<SelectValue placeholder='Select Grade Class Schedule' />
					</SelectTrigger>

					<SelectContent>
						<SelectGroup>
							<SelectItem value='All' className='text-base'>
								Show All
							</SelectItem>

							<SelectItem value='01 — Sapphire' className='text-base'>
								Grade 1 — Sapphire
							</SelectItem>

							<SelectItem value='02 — Jade' className='text-base'>
								Grade 2 — Jade
							</SelectItem>

							<SelectItem value='03 — Ruby' className='text-base'>
								Grade 3 — Ruby
							</SelectItem>

							<SelectItem value='04 — Topaz' className='text-base'>
								Grade 4 — Topaz
							</SelectItem>

							<SelectItem value='05 — Amethyst' className='text-base'>
								Grade 5 — Amethyst
							</SelectItem>

							<SelectItem value='06 — Emerald' className='text-base'>
								Grade 6 — Emerald
							</SelectItem>

							<SelectItem value='07 — Opal' className='text-base'>
								Grade 7 — Opal
							</SelectItem>

							<SelectItem value='08 — Garnet' className='text-base'>
								Grade 8 — Garnet
							</SelectItem>

							<SelectItem value='09 — Quartz' className='text-base'>
								Grade 9 — Quartz
							</SelectItem>

							<SelectItem value='10 — Diamond' className='text-base'>
								Grade 10 — Diamond
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Button
					asChild
					className='bg-white hover:bg-abyss text-base text-pitch hover:text-white border h-auto py-2 px-3 cursor-pointer shadow-none'
				>
					<Link href='/class-schedules/create'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='size-5'
						>
							<path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
						</svg>

						<span>Create New Schedule</span>
					</Link>
				</Button>
			</div>

			<div className='space-y-4'>
				{Object.entries(groupedSchedules)
					.filter(([key]) => {
						if (selectedLevelSection === 'All') return true;

						return key === selectedLevelSection;
					})
					.map(([key, group]) => (
						<div
							key={key}
							className='border border-haze rounded-lg overflow-hidden'
						>
							<div className='flex justify-between bg-eerie text-white font-bold py-2 px-3'>
								<p>{key}</p>

								<div className='flex gap-2'>
									<Link href=''>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='size-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
											/>
										</svg>
									</Link>

									<Link href=''>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='text-cherry size-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
											/>
										</svg>
									</Link>
								</div>
							</div>

							<table className='text-left bg-white rounded-lg w-full'>
								<thead className='bg-abyss text-white'>
									<tr>
										<th className='py-2 px-3'>SUBJECT</th>
										<th className='py-2 px-3'>TEACHER</th>
										<th className='py-2 px-3 w-44'>DAY</th>
										<th className='py-2 px-3 w-44'>TIME</th>
									</tr>
								</thead>

								<tbody>
									{group?.map((schedule, index) => (
										<tr
											key={index}
											className='hover:bg-sky cursor-default'
										>
											<td className='border border-l-0 border-b-0 border-haze w-54 py-2 px-3'>
												{schedule.subject}
											</td>

											<td className='border border-b-0 border-haze py-2 px-3'>
												{schedule.teacher ?? '—'}
											</td>

											<td className='border border-b-0 border-haze w-48 py-2 px-3'>
												{schedule.day}
											</td>

											<td className='border border-r-0 border-b-0 border-haze w-48 py-2 px-3'>
												{schedule.time}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					))}
			</div>
		</div>
	);
}
