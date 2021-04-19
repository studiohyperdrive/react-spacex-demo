// For now only type the properties we actually use
export interface StarlinkModel {
	id: string;
	spaceTrack: {
		OBJECT_NAME: string;
		[key: string]: any;
	};
}

export interface StarlinkQueryResponse {
	docs: StarlinkModel[];
	totalDocs: number;
	offset: number;
	limit: number;
}

export type StarlinkGetResponse = StarlinkModel;

export interface ShipModel {
	name: string;
	launches: string[];
	image: string;
}

export type ShipGetResponse = ShipModel[];

export interface IShip {
	name: string;
	launches: number;
	image: string;
}
