import {IActivityAttributes} from "@/web/types";

export const activities: IActivityAttributes[] = [
	{
		type: '15-yoga',
		physical: {points: 20, duration: 24},
		mental: {points: 5, duration: 24},
		social: null,
		career: null,
		realization: {points: 10, duration: 15}
	},
	{
		type: '50-yoga',
		physical: {points: 45, duration: 60},
		mental: {points: 15, duration: 36},
		social: null,
		career: null,
		realization: {points: 15, duration: 24}
	},
	{
		type: '30-ex',
		physical: {points: 45, duration: 60},
		mental: {points: 20, duration: 36},
		social: null,
		career: null,
		realization: null
	},
	{
		type: '10-ex',
		physical: {points: 20, duration: 24},
		mental: {points: 10, duration: 24},
		social: null,
		career: null,
		realization: null
	},
	{
		type: '1-ex',
		physical: {points: 5, duration: 12},
		mental: {points: 4, duration: 10},
		social: null,
		career: null,
		realization: null
	},
	{
		type: 'sauna',
		physical: {points: 40, duration: 50},
		mental: {points: 8, duration: 36},
		social: null,
		career: null,
		realization: null
	},
	{
		type: 'call-ongba',
		physical: null,
		mental: {points: 5, duration: 20},
		social: {points: 12, duration: 500},
		career: null,
		realization: {points: 10, duration: 200}
	},
	{
		type: 'ongba',
		physical: null,
		mental: {points: 5, duration: 20},
		social: {points: 20, duration: 2000},
		career: null,
		realization: {points: 10, duration: 200}
	},
	{
		type: 'call-bome',
		physical: null,
		mental: {points: 5, duration: 20},
		social: {points: 20, duration: 72},
		career: null,
		realization: null
	},
	{
		type: 'bome',
		physical: null,
		mental: {points: 5, duration: 20},
		social: {points: 20, duration: 480},
		career: null,
		realization: null
	},
	{
		type: 'sth-for-han',
		physical: null,
		mental: {points: 6, duration: 24},
		social: {points: 30, duration: 48},
		career: null,
		realization: null
	},
	{
		type: 'friends',
		physical: null,
		mental: {points: 8, duration: 24},
		social: {points: 20, duration: 72},
		career: null,
		realization: null
	},
	{
		type: '40-career',
		physical: null,
		mental: null,
		social: null,
		career: {points: 10, duration: 150},
		realization: {points: 5, duration: 50}
	},
	{
		type: '1-zazen',
		physical: null,
		mental: {points: 10, duration: 24},
		social: null,
		career: null,
		realization: {points: 1, duration: 50}
	},
	{
		type: '15-zazen',
		physical: null,
		mental: {points: 30, duration: 48},
		social: null,
		career: null,
		realization: {points: 2, duration: 50}
	},
	{
		type: '30-zazen',
		physical: null,
		mental: {points: 50, duration: 120},
		social: null,
		career: null,
		realization: {points: 3, duration: 150}
	},
	{
		type: '15-reading',
		physical: null,
		mental: {points: 3, duration: 12},
		social: null,
		career: null,
		realization: {points: 8, duration: 20}
	},
	{
		type: '40-reading',
		physical: null,
		mental: {points: 5, duration: 20},
		social: null,
		career: null,
		realization: {points: 20, duration: 20}
	},
	{
		type: '40-creating',
		physical: null,
		mental: {points: 5, duration: 20},
		social: null,
		career: null,
		realization: {points: 10, duration: 100}
	},
	{
		type: '40-programming',
		physical: null,
		mental: null,
		social: null,
		career: null,
		realization: {points: 15, duration: 50}
	},
];