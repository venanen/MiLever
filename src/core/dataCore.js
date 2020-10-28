import Data from "../data/data";

class DataCore {
	getHotSales() {
		return new Promise((resolve) => {
			setTimeout(() => resolve(Data.shop.hotSales), 2000);
		});
	}
	getCatalogData(type) {
		return new Promise((resolve) => {
			//console.log(Data.shop[type], type, "smartphones");

			setTimeout(() => resolve(Data.shop[type]), 500);
		});
	}
	getFiltersData(type) {
		return new Promise((resolve) => {
			setTimeout(() => resolve(Data.shop.filters[type]), 500);
		});
	}
}
let dataCore = new DataCore();
export default dataCore;
