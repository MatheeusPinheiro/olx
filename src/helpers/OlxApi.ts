import axios from "axios";
import Cookies from "js-cookie";


const http = axios.create({
	baseURL:'http://alunos.b7web.com.br:501'
});



type BodyProps = {
	email: string;
	password: string;
	token?: string
}


const apiFetchPost = async (endpoint: string, body: BodyProps) => {

	if (!body.token) {
		let token = Cookies.get('token');
		if (token) {
			body.token = token;
		}
	}

	const res = await http.post(`${endpoint}`, { body });
	const json = await res.data;

	if (json.notallowed) {
		window.location.href = '/signin';
	}

	return json;
}



const OlxApi = {

	login: async (email: string, password: string) => {

		let json = await apiFetchPost('/user/signin', { email, password });
		return json;

	},


}


export default () => OlxApi;