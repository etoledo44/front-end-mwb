import styles from 'styled-components';

const Card = styles.div`
    width: ${({width})=> width ? width : "800px" } ;
    height: ${({height})=> height ? height : "800px" } ;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default Card