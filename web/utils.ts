import {IDoneActivity} from "@/web/types";

export const getNewItemsFromPayload = ( items: IDoneActivity[], payload: { new: any, old: { id: number } } ): any[] => {
	if ( JSON.stringify( payload.new ) === '{}' ) {
		return [...items.filter( ( item: any ) => payload.old.id !== item.id )];
	}
	return [...items, payload.new];
};

export const sortByDate = ( a: Date, b: Date ) => a > b ? -1 : 1;