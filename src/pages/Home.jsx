import { useEffect, useState } from 'react'
import CountriesFilter from '../components/CountriesFilter'
import CountriesList from '../components/CountriesList'
import { API_URL } from '../utils/tools.js'

const Home = () => {
	const [countries, setCountries] = useState([])
	const [search, setSearch] = useState('')

	const getCountries = async endpoint => {
		const res = await fetch(API_URL + endpoint)
		const data = await res.json()
		setCountries(data)
	}

	useEffect(() => {
		getCountries('/all')
	}, [])

	const SEARCH_QUERY = new RegExp(search, 'gi')
	const visibleCountries = search
		? countries.filter(country => country.name?.common.match(SEARCH_QUERY))
		: countries

	return (
		<div className='container'>
			<CountriesFilter onSearch={search => setSearch(search)} />
			<CountriesList countries={visibleCountries.slice(0, 8)} />
		</div>
	)
}

export default Home
