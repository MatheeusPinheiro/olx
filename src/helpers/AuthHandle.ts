import Cookies from "js-cookie";



export const isLogged = () => {
	let token = Cookies.get('token');
	return token !== undefined;
}

export const doLogin = (token: string, rememberPassword: boolean = false) => {
	if(rememberPassword){
		Cookies.set('token', token, {expires: 999});
	}else{
		Cookies.set('token', token);
	}
}