
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, PageTitle, ErrorMenssage } from '../../components/MainComponents';
import { doLogin } from '../../helpers/AuthHandle';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxApi';
export const Signin = () => {

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [rememberPassword, setRememberPassword] = useState<boolean>(false)
	const [disabled, setDisabled] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState('');


	const navigate = useNavigate();
	const api = useApi();


	const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisabled(true)
		
		const json = await api.login(email, password);

		setError('');
		if(json.error){
			setError(json.error);
			
		}else{
			doLogin(json.token, rememberPassword);
			navigate('/');
		}

		setDisabled(false);
	}

	return (
		<PageContainer>
			<PageTitle>Login</PageTitle>
			<PageArea>

				{error &&
					<ErrorMenssage>{error}</ErrorMenssage>
				}
				
				<form onSubmit={handleSubmit}>
					<label className='area'>
						<div className='area-title'>E-mail</div>
						<div className='area-input'>
							<input
								type='email'
								disabled={disabled}
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</label>
					<label className='area'>
						<div className='area-title'>Senha</div>
						<div className='area-input'>
							<input
								type='password'
								disabled={disabled}
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</label>
					<label className='area'>
						<div className='area-title'>Lembrar Senha</div>
						<div className=''>
							<input
								type='checkbox'
								disabled={disabled}
								checked={rememberPassword}
								onChange={() => setRememberPassword(!rememberPassword)}
							/>
						</div>
					</label>
					<label className='area'>
						<div className='area-title'></div>
						<div className='area-input'>
							<button disabled={disabled} className='button'>Fazer Login</button>
						</div>
					</label>
				</form>
			</PageArea>
		</PageContainer>
	);
}