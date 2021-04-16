// For now only type the properties we actually use
export interface StarlinkModel {
	id: string;
	spaceTrack: {
		OBJECT_NAME: string;
	};
}

export interface StarlinkQueryResponse {
	docs: StarlinkModel[];
	totalDocs: number;
	offset: number;
	limit: number;
}

export type StarlinkGetResponse = StarlinkModel;
