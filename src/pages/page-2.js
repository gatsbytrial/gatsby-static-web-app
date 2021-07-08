import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

class SomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {compOneData:''};

    }

    componentDidMount(){
        this.loadData();
    }

    loadData(){
        fetch("https://rg-homeservecomsc-reg-uks-001-single.azurewebsites.net/sitecore/api/ssc/item/04ed4d48-376a-4586-a06a-936615a52499")
            .then(result=>result.json())
            .then(result=>this.setState({compOneData: result[0].GaPageSubcategory}); 
    }


    render(){

        return (

            <div>
            <ComponentOne data={this.state.compOneData} />
            </div>
        );

    }
}

export default SomePage;
