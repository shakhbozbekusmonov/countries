import PropTypes from 'prop-types'

const CountriesFilter = ({ onSearch }) => {
	return (
		<div className='d-flex justify-content-between align-items-center my-5'>
			<input
				style={{ width: '480px' }}
				className='form-control'
				type='search'
				placeholder='Search for a country…'
				onChange={evt => onSearch(evt.target.value)}
			/>

			<select className='form-select' style={{ width: '200px' }}>
				<option>Filter by Region</option>
				<option value='Africa'>Africa</option>
				<option value='America'>America</option>
				<option value='Asia'>Asia</option>
				<option value='Europa'>Europa</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</div>
	)
}

CountriesFilter.propTypes = {
	onSearch: PropTypes.func,
}

export default CountriesFilter
