import React from 'react'

function LoadingItem() {
    return(
		<section className="col-8 br-1 bk-default mb-2 mt-2">
			<article className="flex flex-start flex-resp text-center">
				<div className="col-7 max-thumbnail mt-2">
					<div className="animated-background animate-box-max"></div>
				</div>
				<div className="col-3 flex flex-row mt-2 mr-2 mr-2 text-left col-f">
					<div className="mb-1 animated-background animate-box-middle">
					</div>
					<div className="mb-2 animated-background animate-box-full">
					</div>
					<div className="mb-2 animated-background animate-box-full">
					</div>
					<div className="mb-1 animated-background animate-box-middle">
					</div>
				</div>
			</article>
			<article className="ml-2 mt-2 mb-2 flex">
				<div className="col-7">
					<div className="mb-2 animated-background animate-box-middle">
					</div>
					<p className="text-2 mb-1 color-2 animated-background animate-box-full">
					</p>
					<p className="text-2 color-2 animated-background animate-box-full">
					</p>
				</div>
			</article>
		</section>
    );
}

export default LoadingItem