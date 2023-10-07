import React from 'react';

export default function HeroSection() {
	return (
		<section className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center gap-5">
			<h2 className="text-center text-5xl font-bold">The Movie Matcher</h2>
			<form
				action="post"
				className="flex w-64 flex-col items-center justify-center gap-5 lg:w-[28rem]"
			>
				<div className="form-control w-full max-w-md">
					<label htmlFor="name" className="label">
						<span className="label-text">Nome</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-md"
					/>
				</div>
				<button
					type="button"
					className="btn w-full bg-red-500 font-light uppercase text-white hover:bg-red-800"
				>
					criar sala
				</button>
			</form>
		</section>
	);
}