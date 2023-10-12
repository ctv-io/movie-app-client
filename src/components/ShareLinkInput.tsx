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
					className="input join-item input-bordered w-full cursor-pointer select-text border-zinc-700 bg-zinc-900 placeholder:text-zinc-200 focus:outline-none"
					id="shareLink"
					value={placeholderLink}
					readOnly
				/>
				<ShareLinkButton placeholderLink={placeholderLink} />
			</div>
		</label>
	);
}
