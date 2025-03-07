import styled from 'styled-components';

const StyledMenu = styled.nav`
	margin: 5px auto;
	width: 90vw;
	background-color: #fff;
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
					height 0.3s ease;
			}

			&:hover::after {
				width: 100%;
				height: 2px;
			}

			a {
				text-decoration: none;
				color: inherit;
				transition: color 0.3s;

				&.active {
					font-weight: 700; /* Estilo diferente para el enlace activo */
					color: orange; /* Cambiar el color del texto */
				}
			}
		}
	}
`;

export { StyledMenu };
