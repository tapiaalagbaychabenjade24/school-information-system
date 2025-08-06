export default async function AddressInformation({
	params
}: {
	params: Promise<{ lrn: string }>;
}) {
	const { lrn } = await params;

	return (
		<div className='bg-white border border-haze rounded-lg'>
			<div className='flex border-b border-b-haze p-3'>
				<p className='font-semibold w-96'>Present Home Address</p>

				<p className='bg-sky border border-haze rounded-md w-full py-2 px-3'>
					Lower Guiwanon, Poblacion, Compostela, Cebu, Region 7 - Central
					Visayas, Philippines, 6003
				</p>
			</div>

			<div className='flex border-b border-b-haze p-3'>
				<p className='font-semibold w-96'>Permanent Home Address</p>

				<p className='bg-sky border border-haze rounded-md w-full py-2 px-3'>
					Lower Guiwanon, Poblacion, Compostela, Cebu, Region 7 - Central
					Visayas, Philippines, 6003
				</p>
			</div>
		</div>
	);
}
