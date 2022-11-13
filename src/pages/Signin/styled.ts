import styled from 'styled-components';

export const PageArea = styled.div`
	form{
		background-color: #fff;
		border-radius: 3px;
		padding: 10px;
		box-sizing: 0px 0px 3px #191919;


		.area{
			display: flex;
			align-items: center;
			padding: 10px;
			max-width: 500px;

			.area-title{
			  width: 200px;
			  text-align: right;
			  padding-right: 20px;
			  font-weight: bold;
			  font-size: 14px;
			}

			.area-input{
				flex: 1;

				input{
					width: 100%;
					font-size: 14px;
					padding: 5px;
					border: 1px solid #ccc;
					border-radius: 3;
					outline: none;
					transition:  all ease .4s;

					&:focus{
					 border: 1px solid #666;
					 color: #191919;
					}
				}

			
			}
			.button{
					background-color: #0089FF;
					border: 0;
					outline: none;
					padding: 5px 10px;
					font-size: 15px;
					color: #fff;
					cursor: pointer;

					&:hover{
						opacity: .8;
					}
				}
			
		}
	}

`