import React, {cloneElement} from 'react'

export default (props) => {

    return (
        <div>
            {/* {cloneElement(props.children, {...props})} forma para somente um filho de família, um membro */}
            {
                // React.Children.map(props.children, (child) => {
                //     return cloneElement(child,props);
                // }) utilizando React.

                // props.children.map( (child) => {
                //     return cloneElement(child,props);
                // }) desse jeito dá warning Warning: Each child in a list should have a unique "key" prop.

                props.children.map((child, i) => {
                    return cloneElement(child,{...props, key: i});
                })
                
            }
        </div>
    );
};