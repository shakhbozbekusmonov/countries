import PropTypes from 'prop-types'
import CountriesItem from './CountriesItem'

const CountriesList = ({ countries }) => {
	return (
		<ul className='row'>
			{countries.map(country => (
				<CountriesItem key={country.name?.common} country={country} />
			))}
		</ul>
	)
}

CountriesList.propTypes = {
	countries: PropTypes.array,
}

export default CountriesList
