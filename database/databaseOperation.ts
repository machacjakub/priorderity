import {supabase} from "./supabaseClient";
import {IActivity} from "@/web/types";

const operations = {
	getActivities: async () => {
		const {data, error}: any = await supabase
			.from( 'priorderity-activities' )
			.select( '*' );
		if ( error ) {
			return error;
		}
		return data;
	},
	// getItemsWhereStateIs: async ( states: string[] ) => {
	// 	const {data, error}: any = await supabase
	// 		.from( 'items' )
	// 		.select( '*' )
	// 		.in( 'state', states );
	// 	if ( error ) {
	// 		return error;
	// 	}
	// 	return data;
	// },
	addActivity: async ( activity: IActivity['type'] ) => {
		const {data, error}: any = await supabase
			.from( 'priorderity-activities' )
			.insert( {type: activity} )
			.select( '*' );
		if ( error ) {
			return error;
		}
		return data;
	},
	// updateItem: async ( item: IItem ) => {
	// 	const {data, error}: any = await supabase
	// 		.from( 'items' )
	// 		.update( item )
	// 		.eq( 'id', item.id );
	// 	if ( error ) {
	// 		return error;
	// 	}
	// 	return data;
	// },
	// deleteItem: async ( itemId: number ) => {
	// 	const {data, error}: any = await supabase
	// 		.from( 'items' )
	// 		.delete()
	// 		.eq( 'id', itemId );
	// 	if ( error ) {
	// 		return error;
	// 	}
	// 	return data;
	// }
};

export const getDatabaseOperations = () => {
	return operations;
};