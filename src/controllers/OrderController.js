import Kitalabel from '@/apis/Kitalabel.js';

export default {
	add(order){
		return Kitalabel().post('/order/add', order)
	},

	show(){
		return Kitalabel().post('/order')
	},

}