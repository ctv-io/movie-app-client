import React from 'react';

// Components
import GenericMainBackground from '@/components/GenericMainBackground';
import SessionMenu from '@/components/SessionMenu';
import SimpleTitle from '@/components/SimpleTitle';
import SessionButton from '@/components/SessionButton';
import ShareLinkInput from '@/components/ShareLinkInput';

const fakeData: string[] = [
	'Guiga',
	'Leozin',
	'Felipe Xera Penis',
	'Elro',
	'Xalone',
];

const placeholderLink: string = 'http://www.tmm.com/sala?id=batata123';

export default function Session() {
	return (
		<GenericMainBackground>
			<div className="flex h-[80dvh] flex-col items-center justify-start gap-5">
				<SimpleTitle />
				<ShareLinkInput placeholderLink={placeholderLink} />
				<SessionButton isPlayers={!!fakeData.length} />
				<SessionMenu players={fakeData} />
			</div>
		</GenericMainBackground>
	);
}
