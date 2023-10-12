import React from 'react';

// Components
import GenericMainBackground from '@/components/GenericMainBackground';
import SessionMenu from '@/components/room/SessionMenu';
import SimpleTitle from '@/components/SimpleTitle';
import SessionButton from '@/components/room/SessionButton';
import ShareLinkInput from '@/components/room/ShareLinkInput';
import ToggleButton from '@/components/room/ToggleButton';

const fakeData: string[] = [
	'Guiga',
	'Leozin',
	'Felipe Xera Penis',
	'Elro',
	'Xalone',
];

const placeholderLink: string = 'http://www.tmm.com/room?id=batata123';

export default function Room() {
	return (
		<GenericMainBackground>
			<div className="flex h-[80dvh] flex-col items-start justify-start gap-3">
				<SimpleTitle />
				<ShareLinkInput placeholderLink={placeholderLink} />
				<ToggleButton />
				<SessionButton isPlayers={!!fakeData.length} />
				<SessionMenu players={fakeData} />
			</div>
		</GenericMainBackground>
	);
}
