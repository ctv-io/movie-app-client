import React from 'react';

// Interface
import IShareLinkInput from '@/interfaces/IShareLinkInput';
import ShareLinkButton from './ShareLinkButton';

export default function ShareLinkInput({ placeholderLink }: IShareLinkInput) {
	return (
		<label htmlFor="shareLink" className="w-full pt-10">
			<span>Link Para sua sala</span>
			<div className="join w-full">
				<input
					className="input input-bordered join-item w-full disabled:border-zinc-700 disabled:bg-zinc-900 disabled:placeholder:text-zinc-200"
					id="shareLink"
					disabled
					placeholder={placeholderLink}
				/>
				<ShareLinkButton placeholderLink={placeholderLink} />
			</div>
		</label>
	);
}
