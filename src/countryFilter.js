import './App.css';
function CountryFilter ({setCountryStatus,countryStatus}) {
    const filterByCountry = (e) =>{
        setCountryStatus(e.target.value);
    }
    return (
        <form>
            <div>
                <select className="form-select form-select-lg mb-3" onChange={filterByCountry} name="countries">
                    <option defaultValue={'all'}>Select country</option>
                    <option value="all">All</option>
                    <option value="bolivia">Bolivia</option>
                    <option value="argentina">Argentina</option>
                    <option value="USA">USA</option>
                    <option value="australia">Australia</option>
                </select>
            </div>
        </form>
    )

}

export default CountryFilter;