import StudentNavigationBar from '@/components/StudentNavigationBar';

export default async function StudentDetailsLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lrn: string }>;
}>) {
	const { lrn } = await params;

	return (
		<div className='my-4 space-y-3 min-max'>
			<StudentNavigationBar lrn={lrn} />

			{children}
		</div>
	);
}
