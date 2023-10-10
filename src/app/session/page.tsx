import React from 'react';
import { FiLink } from 'react-icons/fi';

// Components
import GenericMainBackground from '@/components/GenericMainBackground';
import SessionMenu from '@/components/SessionMenu';
import SimpleTitle from '@/components/SimpleTitle';
import SessionButton from '@/components/SessionButton';

const fakeData: string[] = [
	'Guiga',
	'Leozin',
	'Felipe Xera Penis',
	'Elro',
	'Xalone',
];

export default function Session() {
	return (
		<GenericMainBackground>
			<div className="flex h-[80dvh] flex-col items-center justify-start gap-3">
				<SimpleTitle />
				<label htmlFor="shareLink" className="w-full pt-10">
					<span>Link Para sua sala</span>
					<div className="join w-full">
						<input
							className="input join-item input-bordered w-full disabled:border-zinc-700 disabled:bg-zinc-900 disabled:placeholder:text-zinc-200"
							id="shareLink"
							disabled
							placeholder="http://www.tmm.com/sala?id=batata123"
						/>
						<button
							className="btn join-item border border-zinc-700 bg-zinc-900"
							type="button"
						>
							<FiLink />
						</button>
					</div>
				</label>
				<SessionButton isPlayers={!!fakeData.length} />
				<SessionMenu players={fakeData} />
			</div>
		</GenericMainBackground>
	);
}
