'use client';

import IShareLinkInput from '@/interfaces/IShareLinkInput';
import React, { useRef } from 'react';
import { FiLink } from 'react-icons/fi';

export default function ShareLinkButton({ placeholderLink }: IShareLinkInput) {
	const tooltipRef = useRef<HTMLDivElement | null>(null);

	async function handleTooltip() {
		if (tooltipRef.current) {
			tooltipRef.current.classList.add('tooltip');
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					if (tooltipRef.current) {
						tooltipRef.current.classList.remove('tooltip');
					}
					resolve();
				}, 2500);
			});
		}
	}

	function CopyLinkClickHandler() {
		navigator.clipboard.writeText(placeholderLink);
		handleTooltip();
	}

	return (
		<div
			ref={tooltipRef}
			className=""
			data-tip="Copied!"
			id="tooltip-click"
			role="tooltip"
		>
			<button
				className="btn join-item border border-zinc-700 bg-zinc-900 hover:border-zinc-700"
				type="button"
				onClick={CopyLinkClickHandler}
			>
				<FiLink />
			</button>
		</div>
	);
}
