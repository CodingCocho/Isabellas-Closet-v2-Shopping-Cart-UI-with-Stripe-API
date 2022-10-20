import {Row, Col} from 'react-bootstrap';
import {productsArray} from '../productsStore';
import ProductCard from '../components/ProductCard';

function Store() {

    return (
        <>
            <h1 align="center" className="p-3">Welcome to Isabella's Closet v2!</h1>
            <p align="center">Enjoy our test products</p>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;