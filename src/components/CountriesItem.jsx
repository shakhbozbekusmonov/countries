import PropTypes from 'prop-types'

const CountriesItem = ({ country }) => {
	return (
		<li className='col-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
			<div className='card'>
				<img
					className='card-img-top'
					src={country.flags?.png}
					width={267}
					height={160}
					alt={country.flags?.alt}
				/>
				<div className='card-body'>
					<h3 className='card-title'>{country.name?.common}</h3>
					<p className='population'>
						<b>Population:</b> {country.population}
					</p>
					<p className='region'>
						<b>Region:</b> {country.region}
					</p>
					<p className='capital'>
						<b>Capital:</b> {country.capital.join('')}
					</p>
				</div>
			</div>
		</li>
	)
}

CountriesItem.propTypes = {
	country: PropTypes.object,
}

export default CountriesItem
