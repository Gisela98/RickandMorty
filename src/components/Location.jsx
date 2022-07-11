import React, { useState } from 'react'

const Location = ({ location }) => {


	return (
		<article className='location'>
			<div className='container'>
				<h2 className='locationtitle'>{location?.name}</h2>
				<div className='locationdetails'>
					<div className='infodetails'>
						<span><b>Type:</b> {location?.type}</span>
					</div>

					<div>
						<span><b>Dimension:</b> {location?.dimension}</span>
					</div>

					<div>
						<span><b>Population:</b> {location?.residents.length}</span>
					</div>
				</div>

			</div>

		</article>
	)
}

export default Location
