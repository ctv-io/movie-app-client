'use client';

import IShareLinkInput from '@/interfaces/IShareLinkInput';
import React, { useState } from 'react';
import { FiLink } from 'react-icons/fi';

export default function ShareLinkButton({ placeholderLink }: IShareLinkInput) {
	const [openTool, setOpenTool] = useState(false);

	function CopyLinkClickHandler() {
		navigator.clipboard.writeText(placeholderLink);
		setOpenTool(!openTool);
		setInterval(() => {
			setOpenTool(!!openTool);
		}, 5000);
	}

	return (
		<div
			className={openTool ? 'tooltip tooltip-open' : ''}
			data-tip="Copied!"
			id="tooltip-click"
			role="tooltip"
		>
			<button
				className="btn join-item  border border-zinc-700   bg-zinc-900 hover:border-zinc-700  "
				type="button"
				onClick={CopyLinkClickHandler}
				data-tip="Copied!"
				data-tooltip-target="tooltip-click"
				data-tooltip-trigger="click"
			>
				<FiLink />
			</button>
		</div>
	);
}
