import styled from 'styled-components';

const StyledMenu = styled.nav`
	margin: 5px auto;
	width: 90vw;
	background-color: #ffff;
	padding: 20px 0px;
	box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.08);
	border-radius: 10px;

	ul {
		font-weight: 500;
		display: flex;
		justify-content: center;
		gap: 40px;
		li {
			position: relative;
			font-weight: 500;
			/* Estilos iniciales para ::after */
			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -4px;
				width: 0px;
				height: 2px;
				background-color: orange;
				transition:
					width 0.3s ease,
					height 0.3s ease; /* Transición para suavizar el cambio */
			}

			/* Estilos para cuando se hace hover sobre el li */
			&:hover::after {
				width: 100%;
				height: 2px;
			}
		}
	}
`;

export { StyledMenu };
