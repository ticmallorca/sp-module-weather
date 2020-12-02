
/**
 * api
 * Copyright(c) 2019 Alejandro Villén
 * MIT Licensed
 */

import { Request, Response, Router } from "express";
const api: Router = Router();
import axios from "axios";


/**
 * GET Weather Position Issue
 * @description Get weather from browser location
 */
api.get("/get", async (req: Request, res: Response) => {

	const response: ResponseDT = {
		status: false,
		data: [],
		message: "",
		size: 0,
		time: new Date().toLocaleString()
	};

	const geo: any = req.query.geolocation;
	const lat: number = geo.coords.latitude;
	const lon: number = geo.coords.longitude;
	let axiosResult: any;
	try {
		axiosResult = await axios({
			url: `${process.env.TICM_WEATHER_URL}?appid=${process.env.TICM_WEATHER_API}&lat=${lat}&lon=${lon}`,
			method: "GET"
		});

	} catch (error) {
		response.message = `Code:${error.response.data.cod} Message:${error.response.data.message}`;
	}

	if (axiosResult !== undefined && axiosResult.status === 200) {
		response.status = true;
		response.data.push(axiosResult.data);
		response.size = response.data.length;
	}
	return res.json(response);
});




export const ticmWeatherController: Router = api;
