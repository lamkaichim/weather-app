const SearchBar = ({ city, setCity, fetchWeather }) => {
    return (
        <div style={{ margin: '20px 0' }}>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ padding: '10px', width: '200px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button onClick={fetchWeather} style={{ padding: '10px 20px', marginLeft: '10px', borderRadius: '4px', background: '#007BFF', color: '#fff', border: 'none' }}>
                Get Weather
            </button>
        </div>
    );
};

export default SearchBar;
