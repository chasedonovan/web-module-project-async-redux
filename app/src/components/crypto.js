import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getCrypto} from '../actions'
import styled from 'styled-components';


const Table = styled.table`
    margin: auto;
    display: inline-block;
    font-size: 1.4rem;
`;
const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;


const Crypto = (props) => {
    const { crypto, isFetching, error } = props;

    useEffect(() => {
        props.getCrypto()
    }, [])

    if(error) {
    return <h2>Error Loading Page: {error}</h2>
    }

    if(isFetching) {
        return <h2>Fetching your Crypto</h2>
    }

    const handleClick = () => {
        props.getCrypto()
        console.log('REFRESHED_CRYPTO:', crypto)
    }
    return (
        <Table> 
            <tr> 
            <Td>TICKER</Td>
            <Td>NAME</Td>
            <Td>PRICE</Td>
            <button onClick={handleClick}>REFRESH CRYPTO PRICES</button>
        </tr>
        {crypto.map(coin => {
        return(
        <tr>             
            <Td>{coin.name}</Td>
            <Td>{coin.symbol}</Td>
            <Td>{coin.price}</Td>            
            <Td><img src={coin.icon}/></Td> 
        </tr>)
            })}
        </Table>
    )
}
const mapStateToProps = (state) => {
    return({
        crypto: state.crypto,
        error: state.error,
        isFetching: state.isFetching
    })
}
export default connect(mapStateToProps, {getCrypto})(Crypto)