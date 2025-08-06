'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StudentNavigationBar({ lrn }: { lrn: string }) {
	const pathname = usePathname();

	return (
		<div className='flex gap-1 bg-white font-medium border border-haze rounded-lg p-2'>
			{[
				{
					path: `/students/${lrn}/student-information`,
					label: 'Student Information'
				},
				{
					path: `/students/${lrn}/address-information`,
					label: 'Address Information'
				},
				{
					path: `/students/${lrn}/educational-attainment`,
					label: 'Educational Attainment'
				},
				{
					path: `/students/${lrn}/parent-information`,
					label: 'Parent Information'
				}
			].map((link, index) => (
				<Link
					key={index}
					href={link.path}
					className={`block ${
						pathname === link.path && 'bg-abyss text-white'
					} hover:bg-abyss hover:text-white rounded-md py-2 px-3`}
				>
					{link.label}
				</Link>
			))}
		</div>
	);
}
