export default class SwapiService {

    _baseUrl = 'https://swapi.co/api/';

    async _getData(url) {
        try {
            const data = await fetch(`${this._baseUrl}${url}`);
            if (!data.ok) {
                throw new Error(`tatus code:${data.status}`)
            }
            return await data.json();

        } catch (error) {
            console.log(error);
        }
    }

    _transformPlanetData(obj) {
        const id = obj.url.match(/\/([0-9]*)\/$/)[1];
        return {
            climate: obj.climate,
            created: obj.created,
            diameter: obj.diameter,
            edited: obj.edited,
            films: obj.films,
            gravity: obj.gravity,
            name: obj.name,
            orbital_period: obj.orbital_period,
            population: obj.population,
            residents: obj.residents,
            rotation_period: obj.rotation_period,
            surface_water: obj.surface_water,
            terrain: obj.terrain,
            url: obj.url,
            id: id
        }
    }

    _transformUserData(obj) {
        return {
            birth_year: obj.birth_year,
            created: obj.created,
            edited: obj.edited,
            eye_color: obj.eye_color,
            films: obj.films,
            gender: obj.gender,
            hair_color: obj.hair_color,
            height: obj.height,
            homeworld: obj.homeworld,
            mass: obj.mass,
            name: obj.name,
            skin_color: obj.skin_color,
            species: obj.species,
            starships: obj.starships,
            url: obj.url,
            vehicles: obj.vehicles
        }
    }

    _transformStarData(obj) {
        let id = null;
        if (obj.url) id = obj.url.match(/\/([0-9]*)\/$/)[1]
        return {
            M: obj.MGLT,
            cargo_capacity: obj.cargo_capacity,
            consumables: obj.consumables,
            cost_in_credits: obj.cost_in_credits,
            created: obj.created,
            crew: obj.crew,
            edited: obj.edited,
            hyperdrive_rating: obj.hyperdrive_rating,
            length: obj.length,
            manufacturer: obj.manufacturer,
            max_atmosphering_speed: obj.max_atmosphering_speed,
            model: obj.model,
            name: obj.name,
            passengers: obj.passengers,
            films: obj.films,
            pilots: obj.pilots,
            starship_class: obj.starship_class,
            url: obj.url,
            id
        }
    }

    async getPlanet(id) {
        const result = await this._getData(`planets/${id}`);  // template literal `${var}value`
        return this._transformPlanetData(result);
    }

    async getPlanets() {
        const result = await this._getData('planets');

        return result.results.map(this._transformPlanetData)
    }

    async getUser(id) {
        const result = await this._getData(`people/${id}`);
        return this._transformUserData(result)
    }

    async getUsers() {
        const result = await this._getData('people');
        return result.results.map(this._transformUserData);

    }

    async getStar(id) {
        const result = await this._getData(`starships/${id}`);
        return this._transformStarData(result)
    }

    async getStars() {
        const result = await this._getData(`starships`);
        return result.results.map(this._transformStarData)

    }
}