import Comp1 from './comp1';

function Product(props) {
        return (
                <div>
                        <Comp1 title={props.items[0].title}
                                price={props.items[0].price}
                                description={props.items[0].description} />

                        <Comp1 title={props.items[1].title}
                                price={props.items[1].price}
                                description={props.items[1].description} />

                        <Comp1 title={props.items[2].title}
                                price={props.items[2].price}
                                description={props.items[2].description} />

                        <Comp1 title={props.items[3].title}
                                price={props.items[3].price}
                                description={props.items[3].description} />

                        <Comp1 title={props.items[4].title}
                                price={props.items[4].price}
                                description={props.items[4].description} />
                </div>
        );
}

export default Product;