

interface Product{

    name:string,
    description:string,
    image:string,
    unitPrice:number,
    qtyOnHand:number


}



function Product(){

    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }

    return (
        <>
        
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" className="form-control" id="productName" />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4" style={styleObj}>

                         <label htmlFor="price">Unit Price </label>
                        <input type="number" className="form-control" id="price" />
                </div>
                <div className="col-12 col-sm-6 col-md-4" style={styleObj}>

                        <label htmlFor="qty">QTY on Hand</label>
                        <input type="number" className="form-control" id="qty" />
                </div>

                <div className="col-12 col-sm-6 col-md-4" style={styleObj}>

                        <div className="form-group">
                            <label htmlFor="image" >Product Image</label>
                            <input type="file" className="form-control" id="image" />
                        </div>
                
                </div>
            
                <div className="col-12" style={styleObj}>
                            <label htmlFor="desc">Description</label>
                            <textarea rows={2} className="form-control" id="desc" />
                </div>

                

            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-success col-12">Save Product</button>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-12">
                    <div className="col-12">
                        <input type="search" className="form-control" placeholder="Search Product Here"/>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-bordered">
                    
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Product Name</th>
                                <th>Qty On Hand</th>
                                <th>Unit Price</th>
                                <th>Delete Option</th>
                                <th>Update Option</th>
                                <th>See More</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>#10029</td>
                                    <td>nike </td>
                                    <td>34</td>
                                    <td>25000</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm">Delete</button>
                                    
                                    </td>
                                    <td>
                                    <button className="btn btn-outline-success btn-sm">Update</button>
                                    </td>
                                    <td>
                                    <button className="btn btn-outline-pimary btn-sm">View</button>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Product;