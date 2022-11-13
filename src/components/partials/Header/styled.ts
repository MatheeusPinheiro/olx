
import styled from 'styled-components';


export const HeaderArea = styled.div`
	background-color: #fff;
	height: 60px;
	border-bottom: 1px solid #ccc;

	.container{
		max-width: 1024px;
		margin: auto;
		display: flex;
	}

	a{
		text-decoration: none;
	}

	.logo{
		flex: 1;
		display: flex;
		align-items: center;
		min-height: 60px;

		.logo1,
		.logo2,
		.logo3{
			font-size: 37px;
			font-weight: bold;
		}

		.logo1{
			color:#ff0000;
		}
		.logo2{
			color: #0000ff;
		}
		.logo3{
			color: #00ff00;
		}
	}

	nav{
		padding: 10px 0;
		
		ul,  li{
		 margin: 0;
		 padding: 0;
		 list-style: none;
	}

	ul{
		display: flex;
		align-items: center;
		height: 40px;
	}
	li{
		margin-left: 20px;
		margin-right: 20px;

		a{
			color: #191919;
			font-size: 14px;


			&:hover{
				color: #999;
			}

			&.button{
				background-color: #ff8100;
				border-radius: 4px;
				color: #fff;
				padding: 5px 10px;

				&.button:hover{
					background-color: #e57706;
				}
			}
		}
	}
	}

`



