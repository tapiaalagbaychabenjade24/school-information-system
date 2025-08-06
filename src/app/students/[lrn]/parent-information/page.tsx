export default async function ParentInformation({
	params
}: {
	params: Promise<{ lrn: string }>;
}) {
	const { lrn } = await params;

	return (
		<div className='bg-white border border-haze rounded-lg'>
			<div className='flex border-b border-b-haze p-3'>
				<p className='font-semibold w-full max-w-64'>Father Details</p>

				<div className='grid grid-cols-2 gap-3 w-full'>
					<div className='space-y-1'>
						<p className='font-medium'>Full Name</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							Benjamin C. Alagbay
						</p>
					</div>

					<div className='space-y-1'>
						<p className='font-medium'>Occupation</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							Businessman / Landlord
						</p>
					</div>

					<div className='space-y-1'>
						<p className='font-medium'>Mobile Number</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							09758418984
						</p>
					</div>

					<div className='space-y-1'>
						<p className='font-medium'>Telephone Number</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							2603905
						</p>
					</div>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<p className='font-semibold w-full max-w-64'>Mother Details</p>

				<div className='grid grid-cols-2 gap-3 w-full'>
					<div className='space-y-1'>
						<p className='font-medium'>Full Name</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							Charito T. Alagbay
						</p>
					</div>

					<div className='space-y-1'>
						<p className='font-medium'>Occupation</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							School Principal
						</p>
					</div>

					<div className='space-y-1'>
						<p className='font-medium'>Mobile Number</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							09081980064
						</p>
					</div>

					<div className='space-y-1'>
						<p className='font-medium'>Telephone Number</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							4256193
						</p>
					</div>
				</div>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<p className='font-semibold w-full max-w-64'>Guardian Details</p>

				<div className='grid grid-cols-2 gap-3 w-full'>
					<div className='space-y-1'>
						<p className='font-medium'>Full Name</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							Charito T. Alagbay
						</p>
					</div>

					<div className='space-y-1'>
						<p className='font-medium'>Relationship</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							Mother
						</p>
					</div>

					<div className='space-y-1'>
						<p className='font-medium'>Mobile Number</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							09081980064
						</p>
					</div>

					<div className='space-y-1'>
						<p className='font-medium'>Telephone Number</p>

						<p className='bg-sky border border-haze rounded-md py-2 px-3'>
							4256193
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
