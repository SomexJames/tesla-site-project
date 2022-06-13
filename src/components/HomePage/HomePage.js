import Header from '../UI/Header';
import BlockContent from './BlockContent';
import './HomePage.css';
const HomePage = ({ sideMenu, setSideMenu }) => {

    const HeroSections = [
        {
            index: "1",
            backgroundImage: "model-3.jpg",
            title: "Model 3",
            description: "Order Online for ",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Existing Inventory"

        },
        {
            index: "2",
            backgroundImage: "model-y.jpg",
            title: "Model Y",
            description: "Order Online for ",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Existing Inventory"

        },
        {
            index: "3",
            backgroundImage: "model-s.jpg",
            title: "Model S",
            description: "Order Online for ",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Existing Inventory",

        },
        {
            index: "4",
            backgroundImage: "model-x.jpg",
            title: "Model X",
            description: "Order Online for ",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Existing Inventory"

        },
        {
            index: "5",
            backgroundImage: "solar-panel.jpg",
            title: "Solar Panels",
            description: "Lowest Cost Solar Panels in America",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },
        {
            index: "6",
            backgroundImage: "solar-roof.jpg",
            title: "Solar Roof",
            description: "Produce Clean Energy From Your Roof",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },
        {
            index: "7",
            backgroundImage: "accessories.jpg",
            title: "Accessories",
            description: "",
            descriptionSpan: "",
            leftButton: "Shop Now"
        }
    ]

    return (
        <div className="Homepage">
            <Header sideMenu={sideMenu} setSideMenu={setSideMenu}/>
            {
                HeroSections.map((props) =>
                    <BlockContent
                        index={props.index}
                        title={props.title}
                        description={props.description}
                        descriptionSpan={props.descriptionSpan}
                        leftButton={props.leftButton}
                        rightButton={props.rightButton}
                    />
                )
            }
        </div>
    )
}

export default HomePage;