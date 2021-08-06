import ImageCell from '../imageCell/imageCell';

import './layout.scss';

const filterArray = (array, labelString) => {
    let labelArray = labelString.toLowerCase().trim().split(' ');
    const filteredArray = array.filter(item => {
        return (new RegExp(labelArray.join("|")).test(item.label.toLowerCase()));
    });
    return filteredArray;
}

function Layout (props) {

    //console.log(filterArray(props.imgArray, props.searchLabel))

    const generateImages = (imgArray) => {
        const result = imgArray.map((item, index) => 
            {
                return(
                    <ImageCell
                        key={index} 
                        imageURL={item.url}
                        imageID={item.id}
                        label={item.label}
                        handleDelete={props.handleDelete}
                    />
                );
            });

        return result;
    }

    const images = generateImages(filterArray(props.imgArray, props.searchLabel));

    return(
        <div className="layout" >
            {images}
        </div>
    );
}

export default Layout;