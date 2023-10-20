import React from 'react';
import SimpleTitle from '../SimpleTitle';

export default function HeroSection() {
	return (
		<section className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center gap-5">
			<SimpleTitle />
			<form
				action="post"
				className="flex w-64 flex-col items-center justify-center gap-2 lg:w-[28rem]"
			>
				<div className="form-control w-full max-w-md">
					<label htmlFor="mainName" className="label flex flex-col items-start">
						<span className="label-text">Nome</span>
						<input
							type="text"
							id="mainName"
							placeholder="Escreva seu nome"
							className="input input-bordered w-full max-w-md"
						/>
					</label>
				</div>
				<button
					type="button"
					className="btn w-full bg-red-500 font-light uppercase text-white hover:bg-red-700"
				>
					criar sala
				</button>
			</form>
		</section>
	);
}