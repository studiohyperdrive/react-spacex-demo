import ky from 'ky';

import {
	ShipGetResponse,
	StarlinkGetResponse,
	StarlinkQueryResponse,
} from './spaceX.service.types';

class SpaceXService {
	private baseUrl = 'https://api.spacexdata.com/v4';
	private httpClient: typeof ky;

	constructor() {
		this.httpClient = ky.create({ prefixUrl: this.baseUrl });
	}

	public async getAllStarlinks(): Promise<StarlinkQueryResponse | undefined> {
		// Use query endpoint to limit the number of items
		return this.httpClient.post('starlink/query').json();
	}

	public async getStarlink(id: string): Promise<StarlinkGetResponse | undefined> {
		return this.httpClient.get(`starlink/${id}`).json();
	}

	public async getAllShips(): Promise<ShipGetResponse> {
		return this.httpClient.get('ships').json();
	}
}

export const spaceXService = new SpaceXService();
