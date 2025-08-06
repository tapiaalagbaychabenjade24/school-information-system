import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

export default async function StudentInformation({
	params
}: {
	params: Promise<{ lrn: string }>;
}) {
	const { lrn } = await params;

	return (
		<div className='bg-white border border-haze rounded-lg'>
			<div className='flex border-b border-b-haze p-3'>
				<label htmlFor='' className='font-semibold w-96'>
					Student LRN
				</label>

				<div className='w-full'>
					<input
						type='text'
						className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						defaultValue={'447034150309'}
					/>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<label htmlFor='' className='font-semibold w-96'>
					Full Name
				</label>

				<div className='grid grid-cols-2 gap-3 w-full'>
					<div className='space-y-1'>
						<label htmlFor='' className='block'>
							First Name
						</label>

						<input
							type='text'
							className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						/>
					</div>

					<div className='space-y-1'>
						<label htmlFor='' className='block'>
							Middle Name
						</label>

						<input
							type='text'
							className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						/>
					</div>

					<div className='space-y-1'>
						<label htmlFor='' className='block'>
							Last Name
						</label>

						<input
							type='text'
							className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						/>
					</div>

					<div className='space-y-1'>
						<label htmlFor='' className='block'>
							Suffix
						</label>

						<input
							type='text'
							className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						/>
					</div>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<label htmlFor='' className='font-semibold w-96'>
					Student Type
				</label>

				<div className='w-full'>
					<Select defaultValue='Junior High-School'>
						<SelectTrigger className='text-base bg-sky border border-haze !h-[42px] w-full py-2 px-3 shadow-none'>
							<SelectValue />
						</SelectTrigger>

						<SelectContent>
							<SelectGroup>
								<SelectItem value='Elementary' className='text-base'>
									Elementary
								</SelectItem>

								<SelectItem
									value='Junior High-School'
									className='text-base'
								>
									Junior High-School
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<label htmlFor='' className='font-semibold w-96'>
					Gender
				</label>

				<div className='w-full'>
					<input
						type='text'
						className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						defaultValue={'Male'}
					/>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<label htmlFor='' className='font-semibold w-96'>
					Civil Status
				</label>

				<div className='w-full'>
					<input
						type='text'
						className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						defaultValue={'Married'}
					/>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<label htmlFor='' className='font-semibold w-96'>
					Date of Birth
				</label>

				<div className='w-full'>
					<input
						type='text'
						className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						defaultValue={'Saturday, February 24, 2001'}
					/>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<label htmlFor='' className='font-semibold w-96'>
					Place of Birth
				</label>

				<div className='w-full'>
					<input
						type='text'
						className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						defaultValue={'Cebu City'}
					/>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<label htmlFor='' className='font-semibold w-96'>
					Religion
				</label>

				<div className='w-full'>
					<Select defaultValue='Roman Catholic'>
						<SelectTrigger className='text-base bg-sky border border-haze !h-[42px] w-full py-2 px-3 shadow-none'>
							<SelectValue />
						</SelectTrigger>

						<SelectContent>
							<SelectGroup>
								<SelectItem
									value='Roman Catholic'
									className='text-base'
								>
									Roman Catholic
								</SelectItem>

								<SelectItem
									value='Iglesia ni Cristo'
									className='text-base'
								>
									Iglesia ni Cristo
								</SelectItem>

								<SelectItem
									value='Evangelical/Christian'
									className='text-base'
								>
									Evangelical/Christian
								</SelectItem>

								<SelectItem
									value='Seventh-day Adventist'
									className='text-base'
								>
									Seventh-day Adventist
								</SelectItem>

								<SelectItem value='Islam' className='text-base'>
									Islam
								</SelectItem>

								<SelectItem value='Buddhism' className='text-base'>
									Buddhism
								</SelectItem>

								<SelectItem
									value='Jehovah’s Witnesses'
									className='text-base'
								>
									Jehovah’s Witnesses
								</SelectItem>

								<SelectItem
									value='Church of Christ (Born Again)'
									className='text-base'
								>
									Church of Christ (Born Again)
								</SelectItem>

								<SelectItem value='Hinduism' className='text-base'>
									Hinduism
								</SelectItem>

								<SelectItem value='Judaism' className='text-base'>
									Judaism
								</SelectItem>

								<SelectItem value='Atheist' className='text-base'>
									Atheist
								</SelectItem>

								<SelectItem value='Agnostic' className='text-base'>
									Agnostic
								</SelectItem>

								<SelectItem value='Other' className='text-base'>
									Other
								</SelectItem>

								<SelectItem
									value='Prefer not to say'
									className='text-base'
								>
									Prefer not to say
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<label htmlFor='' className='font-semibold w-96'>
					Nationality
				</label>

				<div className='w-full'>
					<input
						type='text'
						className='bg-sky border border-haze rounded-md w-full py-2 px-3'
						defaultValue={'Filipino'}
					/>
				</div>
			</div>

			<div className='flex justify-end border-b border-b-haze p-3'>
				<Button className='bg-eerie hover:bg-eerie/95 text-base border h-auto py-2 px-3 cursor-pointer shadow-none'>
					Edit Information
				</Button>
			</div>
		</div>
	);
}
