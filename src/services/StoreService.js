class StoreService {
    _apiBase = 'https://fakestoreapi.com/products';
    // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
    _baseOffset = 8;

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getItemsList = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}?limit=${offset}`);
        return res.data;
    }

    getItem = async (id) => {
        const res = await this.getResource(`/${id}`);
        return res.data;
    }

}

export default StoreService;