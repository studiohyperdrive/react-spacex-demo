import ky from 'ky';

import { StarlinkGetResponse, StarlinkQueryResponse } from './spaceX.service.types';

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

	public async getStarlink(id: string): Promise<StarlinkGetResponse> {
		return this.httpClient.get(`starlink/${id}`).json();
	}
}

export const spaceXService = new SpaceXService();
